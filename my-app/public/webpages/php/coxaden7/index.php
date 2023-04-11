<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='styles.css' type='text/css'>
    <title>Project 7</title>
</head>
<body>
    <?php
   require('model/connect.php');

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

    case 'view':
        include('view/employee_view.php');
        break;
    case 'delete':
        include('model/delete_employee.php');
        break;
        
            }
            ?>

</body>
</html>

