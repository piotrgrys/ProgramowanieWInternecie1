<?php

namespace Nieruchomosci\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Nieruchomosci\Model\Koszyk;
use Nieruchomosci\Form;
use Laminas\View\Model\ViewModel;

class KoszykController extends AbstractActionController
{
    /**
     * KoszykController constructor.
     *
     * @param Koszyk $koszyk
     */
    public function __construct(private Koszyk $koszyk)
    {
    }

    public function dodajAction()
    {
        if ($this->getRequest()->isPost()) {
            $count=$this->koszyk->dodaj($this->params('id'));
            $this->getResponse()->setContent($count);
            //return 10;//$count;
        }

        return $this->getResponse();
    }

    public function listaAction()
    {
        $parametry = $this->params()->fromQuery();
        $strona = $parametry['strona'] ?? 1;

        // pobierz dane ofert
        $paginator = $this->koszyk->pobierzWszystko($parametry);
        $paginator->setItemCountPerPage(10)->setCurrentPageNumber($strona);

        // zbuduj formularz wyszukiwania
        $form = new Form\OfertaSzukajForm();
        $form->populateValues($parametry);

        return new ViewModel([
            'form' => $form,
            'oferty' => $paginator,
            'parametry' => $parametry,
        ]);
    }
}
