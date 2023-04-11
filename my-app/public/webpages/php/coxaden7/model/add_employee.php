<?php

//get department, department_name, dept_acct_num
function add_employee($dep, $vendorID, $prodName, $prodPrice, $prodDesc)
{
require('connect.php');
$query = 'INSERT INTO products (prod_id, vend_id, prod_name, prod_price, prod_desc) VALUES (:prod_id, :vend_id, :prod_name, :prod_price, :prod_desc)';
$statement = $db->prepare($query);
$statement->bindValue(':prod_id', $dep);
$statement->bindValue(':vend_id', $vendorID);
$statement->bindValue(':prod_name', $prodName);
$statement->bindValue(':prod_price', $prodPrice);
$statement->bindValue(':prod_desc', $prodDesc);
$statement->execute();
$statement->closeCursor();
include('../index.php');
header('Location:../index.php');
}
?>