<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  // if ((int)$request->id < 1 || trim($request->number) == '' || (float)$request->amount < 0) {
  //   return http_response_code(400);
  // }
    
  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $username = mysqli_real_escape_string($con, trim($request->username));
  $number = mysqli_real_escape_string($con, trim($request->number));
  $qualification  = mysqli_real_escape_string($con, trim($request->qualification));
  $email = mysqli_real_escape_string($con, trim($request->email));
  $passing_year = mysqli_real_escape_string($con, trim($request->passing_year));
  $course_interested = mysqli_real_escape_string($con, trim($request->course_interested));
  $city = mysqli_real_escape_string($con, trim($request->city));
  $mysqltime = date_create()->format('Y-m-d H:i:s');

  // Update.
  $sql = "UPDATE `student_data` SET `username`='$username',`qualification`='$qualification',`email`='$email',`passing_year`='$passing_year',`course_interested`='$course_interested',`city`='$city',`number`='$number',`date`='$mysqltime' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}