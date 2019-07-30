
<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}
$students = [];
$sql = "SELECT * FROM student_data WHERE `id` ='{$id}'";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $students[$i]['id']    = $row['id'];
    $students[$i]['username'] = $row['username'];
    $students[$i]['number'] = $row['number'];
    $students[$i]['email'] = $row['email'];
    $students[$i]['course_interested'] = $row['course_interested'];
    $students[$i]['qualification'] = $row['qualification'];
    $students[$i]['passing_year'] = $row['passing_year'];
    $students[$i]['city'] = $row['city'];
    $i++;
  }
    
  echo json_encode($students);
//   echo $data;
}
else
{
  http_response_code(404);
}