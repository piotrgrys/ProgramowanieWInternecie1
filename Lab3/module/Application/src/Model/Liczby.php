<?php

namespace Application\Model;

class Liczby 
{
    var $liczby=array();

    public function generuj()
	{

        for($i=0;$i<100;$i++)
        {
            array_push($this->liczby, rand(0,1000));
        }
	}
	
	public function parzyste()
	{
        $result=array();
		foreach ($this->liczby as $value) {
            if($value % 2 == 0){
                array_push($result,$value);
            }
        }
        asort($result);
        return $result;
	}
    public function nieparzyste()
	{
        $result=array();
		foreach ($this->liczby as $value) {
            if($value % 2 != 0){
                array_push($result,$value);
            }
          }
        asort($result);
        return $result;
	}
}