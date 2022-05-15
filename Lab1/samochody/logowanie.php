<?php

session_start();
$numberOfWrongLogins= $_SESSION['nb_incorect_login'] ?? 0;
$liczbaWierszy = $_POST['liczba_wierszy'] ?? 2;
if (isset($_POST['zaloguj'])) {
	$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');

	$stmt = $pdo->prepare("SELECT * FROM uzytkownicy WHERE login = :login AND blocked=0");
	$stmt->execute(['login' => $_POST['login']]);
	$wynik = $stmt->fetch(PDO::FETCH_OBJ);
	$loged=false;
	if ($wynik) 
    {
        $hash="";
        $pwd=trim($_POST["haslo"]);
        $hash=password_hash($pwd,PASSWORD_DEFAULT);
        if (password_verify($pwd, $wynik->haslo))
        {
            $_SESSION['zalogowany'] = 'tak';
            $_SESSION['id'] = $wynik->id;
            $_SESSION['nb_incorect_login']=0;
            header("Location: index.php");
            exit();
        }
	} 
    $komunikat = "Wprowadzono zły login lub hasło.".$numberOfWrongLogins;
    $numberOfWrongLogins=$numberOfWrongLogins+1;
    $_SESSION['nb_incorect_login']=$numberOfWrongLogins+1;
    if($numberOfWrongLogins==3)
    {
        $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
        $stmt = $pdo->prepare("UPDATE uzytkownicy SET blocked=1 WHERE login = :login");
        $stmt->execute(['login' => $_POST['login']]);
        $wynik = $stmt->fetch();
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Logowanie</title>
        <meta charset="utf-8">
    </head>
    <body>
		<?php if(!empty($komunikat)): ?>
			<p style="font-weight: bold; color: red;"><?=$komunikat ?></p>
		<?php endif; ?>
		
        <form method="post" action="">
            <table>
                <tr>
                    <td>Login</td>
                    <td><input type="text" name="login" /></td>
                </tr>
                <tr>
                    <td>Hasło</td>
                    <td><input type="password" name="haslo" /></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" name="zaloguj" value="Zaloguj" /></td>
                </tr>
            </table>
        </form>
    </body>
</html>
