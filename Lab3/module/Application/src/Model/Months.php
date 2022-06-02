<?php

namespace Application\Model;

class Months
{
    public function pobierzWszystkie()
    {
        return [
            array('Styczeń','red'), 
            array('Luty','blue'),
            array('Marzec','black'),
            array('Kwiecień','green'),
            array('Maj','yellow'),
            array('Czerwiec','lightred'),
            array('Lipiec','brown'),
            array('Sierpień','lightblue'),
            array('Wrzesień','darkyellow'),
            array('Październik','lightbrown'),
            array('Listopad','orange'),
            array('Grudzień','lightgreen')];
    }
}
