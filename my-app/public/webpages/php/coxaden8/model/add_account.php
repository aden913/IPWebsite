<?php

//get department, department_name, dept_acct_num
function add_user($name, $pass, $admin)
{
require('dbAccounts.php');
if($admin){
  $account_type = 'admin';  
}
else
{
    $account_type = 'non-admin';
}
$hashPass = password_hash($pass, PASSWORD_DEFAULT);


$query = 'INSERT INTO users (userid, name, pass, account_type) VALUES (:userid, :name, :pass, :account_type)';
$statement = $db->prepare($query);
$statement->bindValue(':userid', $name);
$statement->bindValue(':name', $name);
$statement->bindValue(':pass', $hashPass);
$statement->bindValue(':account_type', $account_type);
$statement->execute();
$statement->closeCursor();
include('../index.php');
header('Location:../index.php');
}
?>