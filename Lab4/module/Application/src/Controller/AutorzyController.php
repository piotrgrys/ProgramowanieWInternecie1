<?php

namespace Application\Controller;

use Application\Form\AutorForm;
use Application\Model\Autor;
use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;

class AutorzyController extends AbstractActionController
{
    /** * @var Autor */ private $autor;
    /** * @var AutorForm */ private $autorForm;
    public function __construct(Autor $autor, AutorForm $autorForm)
    {
        $this->autor = $autor;
        $this->autorForm = $autorForm;
    }
    public function listaAction()
    {
        return new ViewModel([
            'autorzy' => $this->autor->pobierzWszystko(),
        ]);
    }

    public function dodajAction()
    {
        $this->autorForm->get('zapisz')->setValue('Dodaj');

        $request = $this->getRequest();
        if ($request->isPost()) {
            $this->autorForm->setData($request->getPost());

            if ($this->autorForm->isValid()) {
                $this->autor->dodaj($request->getPost());

                return $this->redirect()->toRoute('autorzy');
            }
        }

        return new ViewModel(['nazwisko' => 'Dodawanie autora', 'form' => $this->autorForm]);
    }

    public function edytujAction()
    {
        $id = (int)$this->params()->fromRoute('id');
        if (empty($id)) {
            $this->redirect()->toRoute('autorzy');
        }

        $request = $this->getRequest();
        if ($request->isPost()) {
            $this->autorForm->setData($request->getPost());

            if ($this->autorForm->isValid()) {
                $this->autor->aktualizuj($id, $request->getPost());

                return $this->redirect()->toRoute('autorzy');
            }
        } else {
            $daneAutora = $this->autor->pobierz($id);
            $this->autorForm->setData($daneAutora);
        }

        $viewModel = new ViewModel(['nazwisko' => 'Edytuj autor', 'form' => $this->autorForm]);
        $viewModel->setTemplate('application/autorzy/dodaj');

        return $viewModel;
    }


    public function usunAction()
    {
        $id = (int)$this->params()->fromRoute('id');
        if (empty($id)) {
            $this->redirect()->toRoute('autorzy');
        }
        $request = $this->getRequest();
        if ($request->isPost()) {
            if('Skasuj' === $request->getPost('confirm'))
            {
            $this->autor->usun($id);
            }
            return $this->redirect()->toRoute('autorzy');
        }
        else {
            $daneAutora = $this->autor->pobierz($id);
            $this->autorForm->setData($daneAutora);
            
           }
        $viewModel = new ViewModel(['nazwisko' => 'Usuń', 'form' => $this->autorForm,'id'=>$id]);
        $viewModel->setTemplate('application/autorzy/usun');
    
        return $viewModel;
    }

    public function szczegolyAction()
    {
        $id = (int)$this->params()->fromRoute('id');
        if (empty($id)) {
            $this->redirect()->toRoute('autorzy');
        }

        $request = $this->getRequest();
        if ($request->isGet()) {
            $daneAutora = $this->autor->pobierz($id);
            $this->autorForm->setData($daneAutora);
        }

        $viewModel = new ViewModel(['nazwisko' => 'Szczegóły autor', 'form' => $this->autorForm]);
        $viewModel->setTemplate('application/autorzy/szczegoly');

        return $viewModel;
    }
}
