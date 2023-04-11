<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View</title>
</head>
<body>
<main>
    <?php
    require_once('../model/connect.php');
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$wildcard = $_POST['letter'] . '%';


if(!empty($_POST['letter']))
{
    $queryDepartment = 'SELECT * FROM products WHERE prod_name LIKE :letter ';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->bindValue(':letter', $wildcard);
    $statement1->execute();
    $department = $statement1->fetchAll();
    $statement1->closeCursor();
}
elseif(!empty($_POST['vendorID'])) 
{
    $queryDepartment = 'SELECT * FROM products WHERE vend_id LIKE :vendorID';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->bindValue(':vendorID', $_POST['vendorID']);
    $statement1->execute();
    $department = $statement1->fetchAll();
    $statement1->closeCursor();
}
elseif(!empty($_POST['price'])) 
{
    if($_POST['value'] == 'gt')
    {
        $queryDepartment = 'SELECT * FROM products WHERE prod_price > :price';
        $statement1 = $db->prepare($queryDepartment);
        $statement1->bindValue(':price', $_POST['price']);
        $statement1->execute();
        $department = $statement1->fetchAll();
        $statement1->closeCursor(); 
    }
    elseif($_POST['value'] == 'lt')
    {
        $queryDepartment = 'SELECT * FROM products WHERE prod_price < :price';
        $statement1 = $db->prepare($queryDepartment);
        $statement1->bindValue(':price', $_POST['price']);
        $statement1->execute();
        $department = $statement1->fetchAll();
        $statement1->closeCursor(); 
    }
    else
    {
    $queryDepartment = 'SELECT * FROM products WHERE prod_price LIKE :price';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->bindValue(':price', $_POST['price']);
    $statement1->execute();
    $department = $statement1->fetchAll();
    $statement1->closeCursor(); 
    }
}
    $num = 0;
   
?>
<h1>Here is your results, <?php if(isset($_SESSION['name']))  echo $_SESSION['name']   ?></h1>
        <h2>Products</h2>
        <table>
        <th>Product ID</th>
        <th>Vendor ID</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Description</th>

            <?php foreach ($department as $departments) : ?>

                <tr>          
            <td><?php echo $departments['prod_id']?></td>            
            <td><?php echo $departments['vend_id']?></td>
            <td><?php echo $departments['prod_name']?></td>
            <td><?php echo $departments['prod_price']?></td>
            <td><?php echo $departments['prod_desc']?></td>

            <?php if(isset($_SESSION['admin'] )) { ?>

            <form method='POST' action='view/update_employee.php'>                    
            <td><button type="submit" id='btnEdit' name='btnEdit' value=<?php echo $num ?>  >Edit</button></td>          
            </form>
        
            <form method='POST' action='view/deleteEmployee.php?action=delete'>
            <td><button type="submit" id='btnDelete' name='btnDelete' value=<?php echo $num ?> >Delete</button></td>
            </form>

            <?php } ?>
            </tr>
            <?php $num += 1; ?>
                <?php endforeach; ?>
            </table>