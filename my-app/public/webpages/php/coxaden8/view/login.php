<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='../styles.css' type='text/css'>
    <title>coxaden8</title>
</head>
<body>
<main>
    <form action='model/validation.php' method='POST'>


    <label for='name'>Name: </label>
    <?php if(isset($_SESSION['error_message1'])) { ?>
    <p class="error"><?php  echo $_SESSION['error_message1'] ; ?></p>
    <?php } ?>
<input id='name' name='name' type='text'></input>


<label for='pass'>Password: </label>
<?php if(isset($_SESSION['error_message2'])) { ?>
    <p class="error"><?php echo $_SESSION['error_message2']; ?></p>
    <?php } ?>
<input id='pass' name='pass' type='text'></input>

<label for="login">Login:</label>
<input type="radio" id="login" name="action" value="login" style="width: auto;" checked><br>
  
<label for="signup">Sign Up:</label>
<input type="radio" id="signup" name="action" value="signup" style="width: auto;"><br>
  
<label for="admin"> Admin</label>
<input type="checkbox" id="admin" name="admin" value="yes" style="width: auto;"><br>


<input id='btnLogin' name='btnLogin' type='submit' value='go'></input>  
</form>
</main>
</body>
</html>