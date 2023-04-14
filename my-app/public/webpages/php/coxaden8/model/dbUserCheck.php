<?php
function is_valid_admin_login($name, $pass){
    require('dbAccounts.php');

    $hashPass = password_hash($pass, PASSWORD_DEFAULT);

    $strName = strval($name);
    $strPass = strval($hashPass);
   // echo "this is password from function: " . $pass;

   // echo $name;
    //echo $pass;
    //print_r($_POST);

    $queryUser = 'SELECT account_type FROM users WHERE name = :name AND password = :pass';
    $statement1 = $db->prepare($queryUser);
    $statement1->bindValue(':name', $strName);
    $statement1->bindValue(':pass', $strPass);
    
    $statement1->execute();
    $user = $statement1->fetchAll();
    $statement1->closeCursor();

    //echo $user;

    if($user == [])
    {
        return false;
    }
    elseif($user[0] == 'admin')
    {
        return true;
    }
    else
    {
        $_SESSION['admin'] = $user[0];
        return false;
    }
}

function is_normal_login($name, $pass){
    require('dbAccounts.php');
    $hashPass = password_hash($pass, PASSWORD_DEFAULT);

    $strName = strval($name);
    $strPass = strval($hashPass);
//if account exists
    $queryUser = 'SELECT name, pass FROM users WHERE name = :name AND pass = :pass';
    $statement1 = $db->prepare($queryUser);
    $statement1->bindValue(':name', $strName);
    $statement1->bindValue(':pass', $strPass);
    $statement1->execute();
    $user = $statement1->fetchAll();
    $statement1->closeCursor();

    if($user == [])
    {
        return false;
    }
    else
    {
        return true;
    }
}
?>