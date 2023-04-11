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
    require('../model/connect.php');
   
   $queryVendor = 'SELECT * FROM vendors';
   $statement2 = $db->prepare($queryVendor);  
   $statement2->execute();
   $vendors = $statement2->fetchAll();

    $queryDepartment = 'SELECT * FROM products';
    $statement1 = $db->prepare($queryDepartment);
  
    $statement1->execute();
    $departments = $statement1->fetchAll();
   
    $statement1->closeCursor();


    $value1 = $departments[$_POST["btnEdit"]];

    $preProdID = $value1['prod_id'];
    $preVendID = $value1['vend_id'];
    $preProdName = $value1['prod_name'];
    $preProdPrice = $value1['prod_price'];
    $preProdDesc = $value1['prod_desc'];


    ?>
<main>
<form action='../model/validation.php' method='POST'>
    
<div>
<label for='prodIdUpdate'>Product ID: </label>
    <?php if(!empty($error_message1)) { ?>
    <p class="error"><?php echo $error_message1; ?></p>
    <?php } ?> 
    <input type='text' id='prodIdUpdate' name='prodIdUpdate' value="<?php print_r($value1['prod_id']); ?>" autofocus>
</div>


<div>
<label for='vendorID'>Vendor ID: </label>
<select name='vendorID' id='vendorID'>
<?php foreach ($vendors as $ven) : ?>

     <option value='<?php echo $ven[0];?>' <?php if($preVendID == $ven[0]){echo 'selected';} ?>> <?php echo $ven[1];?></option>

<?php endforeach;?>
</select>

</div>


<div>
<label for='prodName'>Product Name: </label>
<?php if(!empty($error_message3)) { ?>
    <p class="error"><?php echo $error_message3; ?></p>
    <?php } ?>
    <input type='text' id='prodName'name='prodName' value="<?php print_r($value1['prod_name']); ?>"> 
</div>

<div>
<label for='prodPrice'>Product Price: </label>
<?php if(!empty($error_message3)) { ?>
    <p class="error"><?php echo $error_message3; ?></p>
    <?php } ?>
    <input type='number' id='prodPrice'name='prodPrice' value="<?php print_r($value1['prod_price']); ?>"> 
</div>

<div>
<label for='prodDesc'>Product Description: </label>
<?php if(!empty($error_message3)) { ?>
    <p class="error"><?php echo $error_message3; ?></p>
    <?php } ?>
    <input type='text' id='prodDesc'name='prodDesc' value="<?php print_r($value1['prod_desc']); ?>"> 
</div>



<input type='text' value=<?php echo $preProdID ?> id='preProdID' name='preProdID' style='display:none;'></input>
<input type='text' value=<?php echo $preVendID ?> id='preVendID' name='preVendID'style='display:none;'></input>
<input type='text' value=<?php echo $preProdName ?> id='preProdName' name='preProdName'style='display:none;'></input>
<input type='text' value=<?php echo $preProdPrice ?> id='preProdPrice' name='preProdPrice'style='display:none;'></input>
<input type='text' value=<?php echo $preProdDesc ?> id='preProdDesc' name='preProdDesc'style='display:none;'></input>
<input type='submit' class="autoWidth"> 
</form>
</main>
<footer><a href='../index.php'>Back</a></footer>


</body>
</html>

