<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','skillmonks');
$myArr = array();
$myArr[] = $_GET['Params'];
$myJSON = json_encode($myArr);
echo $myJSON;
?>