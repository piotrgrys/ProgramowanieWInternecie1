<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Przykład 3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body> <?php $jezyki = ['Język 1' => 'PHP', 'Język 2' => 'C', 'Język 3' => 'C++', 'Język 4' => 'Java', 'Język 5' => 'C#', 'Język 6' => 'Ruby', 'Język 7' => 'Python'];
        foreach ($jezyki as $klucz => $wartosc) {
            echo "<p>$klucz: <strong>$wartosc</strong>";
        }
        ?> 
        <?php foreach ($jezyki as $klucz => $wartosc) : ?> 
            <p><?= $klucz ?>: <strong><?= $wartosc ?></strong> 
        <?php endforeach; ?>
        <ul>
        <?php $kolory = [
            'Aqua' => '00FFFF',
            'Cyan' => '00FFFF',
            'LightCyan' => 'E0FFFF',
            'PaleTurquoise' => 'AFEEEE',
            'Aquamarine' => '7FFFD4',
            'Turquoise' => '40E0D0',
            'MediumTurquoise' => '48D1CC',
            'DarkTurquoise' => '00CED1',
            'CadetBlue' => '5F9EA0',
            'SteelBlue' => '4682B4',
            'LightSteelBlue' => 'B0C4DE',
            'PowderBlue' => 'B0E0E6',
            'LightBlue' => 'ADD8E6',
            'SkyBlue' => '87CEEB',
            'LightSkyBlue' => '87CEFA',
            'DeepSkyBlue' => '00BFFF',
            'DodgerBlue' => '1E90FF',
            'CornflowerBlue' => '6495ED',
            'MediumSlateBlue'  => '7B68EE',
            'RoyalBlue' => '4169E1',
            'Blue' => '0000FF',
            'MediumBlue' => '0000CD',
            'DarkBlue' => '00008B',
            'Navy' => '000080',
            'MidnightBlue' => '191970'];
            foreach ($kolory as $klucz => $wartosc) {
                echo "<li>$klucz: <strong style='color:#$wartosc;'>$wartosc</strong></li>";
            }
        ?>
        </ul>
</body>
</html>

