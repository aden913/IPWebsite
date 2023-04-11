
    <?php
    function delete_employee($productID){
    require('connect.php');
    
   //print_r($_POST);
    $queryDepartment = 'SELECT * FROM products';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->execute();
    $departments = $statement1->fetchAll();
  
    $queryDepartment2 = 'DELETE FROM orderitems WHERE prod_id = :productID';
    $statement1 = $db->prepare($queryDepartment2);
    $statement1->bindValue(':productID', $productID);
    $statement1->execute();
    $statement1->closeCursor();


    $queryDepartment = 'DELETE FROM products WHERE prod_id = :productID';
    $statement1 = $db->prepare($queryDepartment);
    $statement1->bindValue(':productID', $productID);
    $statement1->execute();
    $statement1->closeCursor();
    include('employee_view.php');
    header('Location:../index.php');
    }
    ?>