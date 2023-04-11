<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='styles.css' type='text/css'>
    <title>Project 5</title>
</head>
<body>
    <?php
    require("model/connect.php");
   
    $queryVendorID = 'SELECT vend_id FROM vendors';
    $statement1 = $db->prepare($queryVendorID);  
    $statement1->execute();
    $venID = $statement1->fetchAll();
    

    $queryVendor = 'SELECT * FROM vendors';
    $statement2 = $db->prepare($queryVendor);  
    $statement2->execute();
    $vendors = $statement2->fetchAll();
    $statement2->closeCursor();

    ?>
<main>
<form action='model/validation.php'method='POST'>
        <div>
<label for='prodID'>Product ID: </label>
    <?php if(!empty($error_message1)) { ?>
    <p class="error"><?php echo $error_message1; ?></p>
    <?php } ?> 
    <input type='text' id='prodID' name='prodID' value="<?php if (isset($_POST['prodID'])) echo $_POST['prodID']; ?>" autofocus>

</div>
<div>
    <label for='vendorID'>Vendor ID: </label>
<select name='vendorID' id='vendorID'>
<?php foreach ($vendors as $ven) : ?>

     <option value='<?php echo $ven[0];?>'><?php echo $ven[1];?></option>

<?php endforeach;?>
</select>



</div>
<div>

<label for='prodName'>Product Name: </label>
<?php if(!empty($error_message3)) { ?>
    <p class="error"><?php echo $error_message3; ?></p>
    <?php } ?>
    <input type='text' id='prodName'name='prodName' value="<?php if (isset($_POST['prodName'])) echo $_POST['prodName']; ?>"> 
</div>

<div>

<label for='prodPrice'>Product Price: </label>
<?php if(!empty($error_message4)) { ?>
    <p class="error"><?php echo $error_message4; ?></p>
    <?php } ?>
    <input type='number' id='prodPrice'name='prodPrice' value="<?php if (isset($_POST['prodPrice'])) echo $_POST['prodPrice']; ?>"> 
</div>

<div>

<label for='prodDesc'>Product Description: </label>
<?php if(!empty($error_message5)) { ?>
    <p class="error"><?php echo $error_message5; ?></p>
    <?php } ?>
    <input type='text' id='prodDesc'name='prodDesc' value="<?php if (isset($_POST['prodDesc'])) echo $_POST['prodDesc']; ?>"> 
</div>


<input type='submit' class="autoWidth"> 
</form>
</main>

<footer>
    
    <a href='.?action=view'>Back</a>

</footer>
</body>
</html>

<?php


?>