<?php
require('connect.php');

echo "<link rel='stylesheet' href='styles.css' type='text/css'>";
$isAnUpdate = false;

//prodID and prodIDUpdate are the same just different names from insert and update
if(isset($_POST['prodID'])){
    $dep = filter_input(INPUT_POST, 'prodID',FILTER_SANITIZE_STRING);
}
else{
    $dep = filter_input(INPUT_POST, 'prodIdUpdate',FILTER_SANITIZE_STRING);
    $isAnUpdate = true;
}
//print_r($_POST);
$vendorID = $_POST["vendorID"];
$prodName = filter_input(INPUT_POST, 'prodName',FILTER_SANITIZE_STRING);
$prodPrice = filter_input(INPUT_POST, 'prodPrice',FILTER_VALIDATE_FLOAT);
$prodDesc = filter_input(INPUT_POST, 'prodDesc',FILTER_SANITIZE_STRING);
filter_input(INPUT_POST, $vendorID,FILTER_SANITIZE_STRING);



$dep = strtoupper($dep);

$dupesql = "SELECT prod_id FROM products";
$statement1 = $db->prepare($dupesql);
$statement1->execute();
$statement = $statement1->fetchAll();

if(isset($_POST['preProdID'])) {
    $preProdID = $_POST['preProdID'];
}
if(isset($_POST['preVendID'])) {
    $preVendID = $_POST['preVendID'];
}
if(isset($_POST['preProdName'])) {
    $preProdName = $_POST['preProdName'];
}
if(isset($_POST['preProdPrice'])) {
    $preProdPrice = $_POST['preProdPrice'];
}
if(isset($_POST['preProdDesc'])) {
    $preProdDesc = $_POST['preProdDesc'];
}
    
    
$error_message1 = '';
$error_message2 = '';
$error_message3 = '';
$error_message4 = '';
$error_message5 = '';
$min = 00000000.00;
$max = 99999999.99;


//product id
if(empty($dep))
{
    $error_message1 = 'Please give a value for product id';
}
/* foreach ($statement as $duplicates) : 
    if($dep == $duplicates[0])
    {
        $error_message1 = 'That department already exists';
    }
endforeach;  */

//vendor id
if(empty($vendorID))
{
    $error_message2 = 'Please give a value for vendor id';
}


//product name
if(empty($prodName))
{
    $error_message3 = 'Please give a value for product name';
}
else if(strlen($prodName) > 255)
{
    $error_message3 = 'Please have a shorter name';
}

//product price
if(empty($prodPrice))
{
    $error_message4 = 'Please give a value for product price';
}
elseif ($prodPrice > 99999999.99 || $prodPrice < 0.01 ) {
    $error_message4 = "please enter a price between 99999999.99 and 0.01";
}

//product description
//no validation required for description
if ($error_message1 != ''  ) {
    if($isAnUpdate)
    {
        include('../view/update_employee.php');
        
        exit();
    }
    else
    {
        include('../view/insert.php');
        exit();
    }   
}
elseif( $error_message2 != '' ){
    if($isAnUpdate)
    {
        include('../view/update_employee.php');
              
        exit();
    }
    else
    {
        include('../view/insert.php');
        exit();
    }   
}
elseif( $error_message3 != ''){
    if($isAnUpdate)
    {
        include('../view/update_employee.php');
        
        exit();
    }
    else
    {
        include('../view/insert.php');
        exit();
    }   
}
elseif( $error_message4 != ''){
    if($isAnUpdate)
    {
        include('../view/update_employee.php');
        
        exit();
    }
    else
    {
        include('../view/insert.php');
        exit();
    }   
}
elseif( $error_message5 != ''){
    if($isAnUpdate)
    {
        include('../view/update_employee.php');
       
        exit();
    }
    else
    {
        include('../view/insert.php');
        exit();
    }   
}
else{
    //if it is an insert go to the insert page
    if(isset($_POST['prodID'])){
        require_once('add_employee.php');
        add_employee($dep, $vendorID, $prodName, $prodPrice, $prodDesc);
        
        exit(); 
    }
    //otherwise update the database with the new info
    else{     
        //include('updateEmployee.php');  
        require_once('updateEmployee.php');
        update_employee($dep, $vendorID, $prodName, $prodPrice, $prodDesc, $preProdID, $preVendID, $preProdName, $preProdPrice, $preProdDesc);
        exit();
    }
    
}

?>