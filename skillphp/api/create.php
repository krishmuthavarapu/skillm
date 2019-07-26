<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  // if(trim($request->number) === '' || (float)$request->amount < 0)
  // {
  //   return http_response_code(400);
  // }
	
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->username));
  $number = mysqli_real_escape_string($con, trim($request->number));
  $qualification  = mysqli_real_escape_string($con, trim($request->qualification));
  $email = mysqli_real_escape_string($con, trim($request->email));
  $passing_year = mysqli_real_escape_string($con, trim($request->passing_year));
  $course_interested = mysqli_real_escape_string($con, trim($request->course_interested));
  $city = mysqli_real_escape_string($con, trim($request->city));
  $mysqltime = date_create()->format('Y-m-d H:i:s');

  // Store.
  $sql = "INSERT INTO `student_data`(`id`,`username`,`number`,`qualification`,`passing_year`,`email`,`course_interested`,`city`,`date`) 
  VALUES (null,'{$username}','{$number}','{$qualification}','{$passing_year}','{$email}','{$course_interested}','{$city}','{$mysqltime}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $caf = [
      'username'=>$username,
      'number' => $number,
      'qualification' => $qualification,
      'email' =>$email,
      'course_interested' => $course_interested,
      'passing_year'=>$passing_year,
      'city' => $city,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($caf);
  }
  else
  {
    http_response_code(422);
  }
}