<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
class UserDetailsController extends Controller
{
    public function userDetails(Request $req)
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    foreach($req->fd as $postdata)
    {
      $datainserted = DB::table('userdata')->insert(
      ['username' => $postdata['updates'][0]['value'], 'email' => $postdata['updates'][1]['value']]
        );
      if($datainserted)
      {
        return response()->json("Data Added Successfully");
      }
    }
    
  }
}
