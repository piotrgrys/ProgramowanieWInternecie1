<?php

if (isset($_POST['operation']) &&
isset($_POST['x-txt']) &&
isset($_POST['y-txt'])
) {
    $oper=$_POST['operation'];
    $x=$_POST['x-txt'];
    $y=$_POST['y-txt'];
    if(is_numeric($x) && is_numeric($x))
    {
        switch($oper)
        {
            case "ADD":
                echo floatval($x)+floatval($y);
                break;
            case "SUBTRACT":
                echo floatval($x)-floatval($y);
                break;
            case "MULTIPLY":
                echo floatval($x)*floatval($y);
                break;
            case "DIVIDE":
                if($y===0)
                {
                    echo 'Error';
                }
                else
                {
                    echo floatval($x)/floatval($y);
                }
                break;
        }
    }
    else
    {
        echo 'Error';
    }
}
else
{
    echo $_POST['x-txt'];//'Empty input';
}

exit();