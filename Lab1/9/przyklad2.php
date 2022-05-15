<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Przykład 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body> 
    <table>
        <td>
            Kolumna 1
        </td>
        <td>
            Kolumna 2
        </td>
        <?php for ($i = 0; $i < 10; $i++) : ?> 
            <tr style=
            <?php if($i%2==0)
                {
                    echo( '"background-color: yellow;"');
                }  
                else
                {
                    echo('"background-color: green;"');
                }
            ?>>
                <td>Wiersz</td>
                <td><?= $i ?></td>
            </tr>
        <?php endfor; ?> 
        </table>
</body>
</html>