<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='styles.css' type='text/css'>
    <title>Project 8</title>
</head>
<body>
    <?php
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    //print_r($_SESSION);
    require_once('model/dbUserCheck.php');
    require_once('model/connect.php');

$action = filter_input(INPUT_POST, 'action');
if ($action === NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if($action === NULL) {
        $action = 'view';
    }
}



//echo $action;
switch($action) {
    case 'add':        
        include('view/insert.php');       
        break;

    case 'update':
        include('model/updateEmployee.php');
            break;

    case 'delete':
        include('model/delete_employee.php');
        break;

    case 'view':
        if(isset($_SESSION['name']))
        {
            include('view/employee_view.php');
            break;
        }
        else
        {
            $action = 'login';
        }
        
    case 'login':
        $name = '';
        $pass = '';
        if(isset($_SESSION['name'])){
            $name = $_SESSION['name'];
        }
        if(isset($_SESSION['pass'])){
            $pass = $_SESSION['pass'];
        }
        
        if (is_valid_admin_login($name, $pass)) 
        {
            $_SESSION['admin'] = true;
            header("Location: .");
        } 
        elseif(is_normal_login($name, $pass))
        {
            $_SESSION['non-admin'] = true;
            header("Location: .");
        } 
        else 
        {
            include('view/login.php');
        }
        break;

    case 'logout':
        
        $_SESSION = [];
        session_destroy();
        include('view/login.php');
        break;

    case 'create-cookie':
        setcookie($name, $value, $expire, $path, $domain, $secure, $httponly);
        break;
    
    case 'delete-cookie':
        $expire = new DateTime('-1 year');
        setcookie('userid', '', $expire, '/');
        break;

            }
            ?>

</body>
</html>

