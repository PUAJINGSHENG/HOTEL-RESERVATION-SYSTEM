<?php
require_once("../../includes/initialize.php");
 if (!isset($_SESSION['ADMIN_ID'])){
 	redirect(WEB_ROOT ."admin/login.php");
 }
$view = (isset($_GET['view']) && $_GET['view'] != '') ? $_GET['view'] : '';
$title ="Report";
$content    = 'list.php';		
		
  include '../modal.php';
require_once '../themes/backendTemplate.php';
?>


  
