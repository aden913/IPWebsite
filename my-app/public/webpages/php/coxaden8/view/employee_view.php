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
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
//print_r($_SESSION);
    //require_once("func.php");
    $num = 0;
    $queryDepartment = 'SELECT * FROM products';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->execute();
    $department = $statement1->fetchAll();
    $statement1->closeCursor();

    $queryVendor = 'SELECT * FROM vendors';
    $statement2 = $db->prepare($queryVendor);  
    $statement2->execute();
    $vendors = $statement2->fetchAll();
    $statement2->closeCursor();
?>
<h1>Greetings, <?php if(isset($_SESSION['name']))  echo $_SESSION['name']   ?></h1>
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

            <form method='POST' action='view/filter.php'>

            <label for='letter'>Letter </label><input name='letter' id='letter' type='text'></input>
            <label for='vendorID'>Vendor ID: </label>
            <select name='vendorID' id='vendorID'>
            <option value=''></option>
                <?php foreach ($vendors as $ven) : ?>
                    <option value='<?php echo $ven[0];?>'><?php echo $ven[1];?></option>
                <?php endforeach;?>
            </select><br>
            <label for='price'>Price</label><input name='price' id='price' type='text'></input>
            <label for='gt'>Greater Than: </label><input name='value' id='gt' value='gt' type='radio' style="width: auto;"></input>
            <label for='lt'>Less Than: </label><input name='value' id='lt' value='lt' type='radio' style="width: auto;"></input>

            <input type='submit'></input>
            </form>
</main>
<footer>
<p><a href=".?action=add">Add</a></p>
<p><a href=".?action=logout">Logout</a></p>
</footer>
</body>
</html>