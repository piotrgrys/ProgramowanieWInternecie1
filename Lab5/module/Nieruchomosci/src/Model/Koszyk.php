<?php

namespace Nieruchomosci\Model;

use Laminas\Db\Adapter as DbAdapter;
use Laminas\Db\Sql\Sql;
use Laminas\Session\Container;
use Laminas\Session\SessionManager;
use Laminas\Paginator\Paginator;
use Laminas\Paginator\Adapter\LaminasDb\DbSelect;

class Koszyk implements DbAdapter\AdapterAwareInterface
{
	use DbAdapter\AdapterAwareTrait;
	
	protected Container $sesja;
	
	public function __construct()
	{
		$this->sesja = new Container('koszyk');
		$this->sesja->liczba_ofert = $this->sesja->liczba_ofert ?: 0;
	}

    /**
     * Dodaje ofertdo koszyka.
     *
     * @param int $idOferty
     * @return int|null
     */
	public function dodaj(int $idOferty): ?int
	{
		$dbAdapter = $this->adapter;
		$session = new SessionManager();
		
		$sql = new Sql($dbAdapter);

		$select=$sql->select('koszyk');
		$select->where(['id_oferty' => $idOferty,'id_sesji' => $session->getId()]);
		$selectString = $sql->buildSqlString($select);
        $wynik = $dbAdapter->query($selectString, $dbAdapter::QUERY_MODE_EXECUTE);
		if($wynik->count()==0)
		{
			$insert = $sql->insert('koszyk');
			$insert->values([
				'id_oferty' => $idOferty,
				'id_sesji' => $session->getId()
			]);
			
			$selectString = $sql->buildSqlString($insert);
			$wynik = $dbAdapter->query($selectString, $dbAdapter::QUERY_MODE_EXECUTE);
			
			$select=$sql->select('koszyk');
			$select->where(['id_sesji' => $session->getId()]);
			
			$selectString = $sql->buildSqlString($select);
			$wynik = $dbAdapter->query($selectString, $dbAdapter::QUERY_MODE_EXECUTE);

			$this->sesja->liczba_ofert++;//=$wynik->count();
			
			try {
				//return $wynik->getGeneratedValue();
				return $wynik->count();
			} catch(\Exception $e) {
				return null;
			}
		}
		else
		{
			return "Oferta jest już w koszyku";
		}
	}

    /**
     * Zwraca liczbe ofert w koszyku.
     *
     * @return int
     */
	public function liczbaOfert(): int
	{
		return $this->sesja->liczba_ofert;
	}

	public function pobierzWszystko(array $szukaj = []): Paginator
    {
        $dbAdapter = $this->adapter;

        $sql = new Sql($dbAdapter);
        $select = $sql->select('oferty');

        if (!empty($szukaj['typ_oferty'])) {
            $select->where(['typ_oferty' => $szukaj['typ_oferty']]);
        }
        if (!empty($szukaj['typ_nieruchomosci'])) {
            $select->where(['typ_nieruchomosci' => $szukaj['typ_nieruchomosci']]);
        }
        if (!empty($szukaj['numer'])) {
            $select->where(['numer' => $szukaj['numer']]);
        }
        if (!empty($szukaj['powierzchniaOd'])) {
            $select->where(['powierzchnia>='.$szukaj['powierzchniaOd']]);
        }
        if (!empty($szukaj['powierzchniaDo'])) {
            $select->where(['powierzchnia<='.$szukaj['powierzchniaDo']]);
        }
        if (!empty($szukaj['cenaOd'])) {
            $select->where(['cena>='.$szukaj['cenaOd']]);
        }
        if (!empty($szukaj['cenaDo'])) {
            $select->where(['cena<='.$szukaj['cenaDo']]);
        }
        $paginatorAdapter = new DbSelect($select, $dbAdapter);

        return new Paginator($paginatorAdapter);
    }
}