<?php
$dsn = 'mysql:host=ipdb.c52eeidbab1q.us-east-2.rds.amazonaws.com;dbname=crashcourse';
$username = 'root';
$password = 'rootpassword';

$db = new PDO($dsn, $username, $password);

try {
    $db = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    if ($e->errorInfo[1] === 1062) {
        $error_message = "This department is already taken!";
    } else {
    $error_message = $e->getMessage();
    include('dbError.php');
    exit();
    }
}
?>