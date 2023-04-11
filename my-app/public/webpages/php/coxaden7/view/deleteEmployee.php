<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='styles.css' type='text/css'>
    <title>Project 4</title>
</head>
<body>
    <?php
    require_once('../model/connect.php');
    include_once('../model/delete_employee.php');
   //print_r($_POST);
    $queryDepartment = 'SELECT * FROM products';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->execute();
    $departments = $statement1->fetchAll();
    $statement1->closeCursor();
    $value1 = $departments[$_POST["btnDelete"]];
    //$rowNum = $_POST["btnDelete"];
    $preProdID = $value1['prod_id'];
   

    ?>
<main>
<!--     <h1 style="color:red; text-decoration: underline;">Are you sure you want to delete this product?</h1>

    
<div style="text-align:center;"> 
    <h2 type='text' id='prodIdUpdate' name='prodIdUpdate'><?php print_r($value1['prod_id']); ?> </h2>
    <h2 type='text' id='prodName'name='prodName' > <?php print_r($value1['prod_name']); ?></h2>
</div>
 -->
<?php

$action = filter_input(INPUT_POST, 'action');
if ($action === NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if($action === NULL) {
        $action = 'view';
    }
}

switch($action) {
    case 'view':                     
        break;

    case 'delete':
        delete_employee($preProdID);
       
        break;
        }
?>

</main>
<!-- <p><a href="?action=delete">Confirm</a></p>
<footer><a href='../index.php'>Back</a></footer> -->
</body>
</html>

