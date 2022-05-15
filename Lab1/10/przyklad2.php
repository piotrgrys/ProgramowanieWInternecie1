<?php $liczbaWierszy = $_POST['liczba_wierszy'] ?? 2;
$liczbaKolumn = $_POST['liczba_kolumn'] ?? 2;
$kolorTla = $_POST['kolor_tla'] ?? 'white'; 
$kolorowanieWierszy = $_POST['kolorowanieWierszy'] ?? 'off'; 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>WIT</title>
    <style>
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body style="background-color: <?= $kolorTla ?>">
    <table> 
        <?php for ($i = 0; $i < $liczbaWierszy; $i++) : ?> 
            <tr style=
                    <?php if($kolorowanieWierszy=="on" && ($i+1)%2==0)
                        {
                            echo( '"background-color: yellow;"');
                        }  
                        else
                        {
                            echo('"background-color: green;"');
                        }
                    ?>> 
                <?php for ($j = 0; $j < $liczbaKolumn; $j++) : ?> <td><?= $i ?>.<?= $j ?></td> 
                <?php endfor; ?> 
            </tr> 
        <?php endfor; ?> 
    </table>
    <?php if (!empty($_POST)) : ?> <table>
            <tr>
                <th>Nazwa pola</th>
                <th>Wartość</th>
            </tr> 
            <?php foreach ($_POST as $klucz => $wartosc) : ?> 
                <tr>
                    <td><?= $klucz ?></td>
                    <td><?= $wartosc ?></td>
                </tr> 
            <?php endforeach; ?>
        </table> 
    <?php endif; ?> 
</body>

</html>