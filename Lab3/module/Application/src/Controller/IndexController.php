<?php

/**
 * @see       https://github.com/laminas/laminas-mvc-skeleton for the canonical source repository
 * @copyright https://github.com/laminas/laminas-mvc-skeleton/blob/master/COPYRIGHT.md
 * @license   https://github.com/laminas/laminas-mvc-skeleton/blob/master/LICENSE.md New BSD License
 */

declare(strict_types=1);

namespace Application\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }

    public function dataAction()
    {
        $data = new \Application\Model\Data();

        return new ViewModel([
            'dzisiaj' => $data->dzisiaj(),
            'dni_tygodnia' => $data->dniTygodnia(),
        ]);
    }
    public function monthsAction()
    {
        $lista_miesiecy = new \Application\Model\Months();

        return new ViewModel([
            'lista_miesiecy' => $lista_miesiecy->pobierzWszystkie(),
        ]);
    }
    public function liczbyAction()
    {
        $liczby = new \Application\Model\Liczby();
        $liczby->generuj();
        return new ViewModel([
            
            'liczbyparzyste' => $liczby->parzyste(),
            'liczbynieparzyste' => $liczby->nieparzyste(),
        ]);
    }
}
