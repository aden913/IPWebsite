<?php
//print_r($_POST);
function update_employee($prodIdUpdate, $vendorID, $prodName, $prodPrice, $prodDesc, $preProdID, $preVendID, $preProdName, $preProdPrice, $preProdDesc){
require('connect.php');
$prodIdUpdate = $_POST['prodIdUpdate'];
$vendorID = $_POST['vendorID'];
$prodName = $_POST['prodName'];
$prodPrice = $_POST['prodPrice'];
$prodDesc = $_POST['prodDesc'];

$preProdID = $_POST['preProdID'];
$preVendID = $_POST['preVendID'];
$preProdName = $_POST['preProdName'];
$preProdPrice = $_POST['preProdPrice'];
$preProdDesc = $_POST['preProdDesc'];
    
$query = 'UPDATE products SET vend_id = :vendorID, prod_id = :prodIdUpdate, prod_name = :prodName, prod_price = :prodPrice, prod_desc = :prodDesc  WHERE vend_id = :preVendID AND prod_id = :preProdID';
$statement = $db->prepare($query);
$statement->bindValue(':vendorID', $vendorID);
$statement->bindValue(':preVendID', $preVendID);
$statement->bindValue(':preProdID', $preProdID);

$statement->bindValue(':prodIdUpdate', $prodIdUpdate);
$statement->bindValue(':prodName', $prodName);
$statement->bindValue(':prodPrice', $prodPrice);
$statement->bindValue(':prodDesc', $prodDesc);

    $statement->execute();
    $statement->closeCursor();
include('../index.php');
header('Location:../index.php');
exit();
}
?>