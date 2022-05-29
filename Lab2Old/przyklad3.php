<?php

$dane = [];
$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
foreach ($pdo->query('SELECT * FROM samochody ORDER BY marka, model', PDO::FETCH_ASSOC) as $wiersz) {
	$dane[] = $wiersz;
}

header('Content-Type: application/json');
echo json_encode($dane);
exit();
