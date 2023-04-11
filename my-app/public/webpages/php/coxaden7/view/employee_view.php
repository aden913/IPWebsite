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

    //require_once("func.php");
    $num = 0;
    $queryDepartment = 'SELECT * FROM products';
    $statement1 = $db->prepare($queryDepartment);
  
    $statement1->execute();
    $department = $statement1->fetchAll();
   
    $statement1->closeCursor();
?>
        <h1>Products</h1>
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

            <form method='POST' action='view/update_employee.php'>
                                
            <td><button type="submit" id='btnEdit' name='btnEdit' value=<?php echo $num ?>  >Edit</button></td>
            
            </form>

            <form method='POST' action='view/deleteEmployee.php?action=delete'>
            <td><button type="submit" id='btnDelete' name='btnDelete' value=<?php echo $num ?> >Delete</button></td>
            </form>
            </tr>
            <?php $num += 1; ?>
                <?php endforeach; ?>
            </table>
</main>
<footer>
<p><a href=".?action=add">Add</a></p>
</footer>
</body>
</html>