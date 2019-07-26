<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
    
$students = [];
$sql = "SELECT * FROM student_data";

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
}
else
{
  http_response_code(404);
}