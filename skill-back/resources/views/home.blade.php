@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-3 p-5">
            <img src="https://instagram.fhyd7-1.fna.fbcdn.net/vp/3cd02b4d00f3c3c8640a59f82e792e25/5DB47138/t51.2885-19/s150x150/22709172_932712323559405_7810049005848625152_n.jpg?_nc_ht=instagram.fhyd7-1.fna.fbcdn.net" class="rounded-circle" alt="">
        </div>
        <div class="col-9 p-5">
            <div>
                <h1>{{ $user -> username}}</h1>
            </div>
            <div class="d-flex">
                <div class="pr-5"> <strong>12 </strong>posts</div>
                <div class="pr-5"><strong>120 </strong>Followers</div>
                <div class="pr-5"><strong>200 </strong>Following</div>
            </div>
            <div class="pt-4 font-weight-bold">{{ $user->profile->title}}</div>
            <div>{{$user->profile->description}}</div>
            <div><a href="">{{$user->profile->url}}</a></div>
        </div>
    </div>
    <div class="row pt-5">
        <div class="col-4">
        <img src="https://instagram.fhyd7-1.fna.fbcdn.net/vp/876d9daa917959904f535cfa35607ada/5DBE2CA9/t51.2885-15/sh0.08/e35/c1.0.748.748a/s640x640/65142981_753889638347402_2885440414377677851_n.jpg?_nc_ht=instagram.fhyd7-1.fna.fbcdn.net" class="w-100">
        </div>
        <div class="col-4">
        <img src="https://instagram.fhyd7-1.fna.fbcdn.net/vp/876d9daa917959904f535cfa35607ada/5DBE2CA9/t51.2885-15/sh0.08/e35/c1.0.748.748a/s640x640/65142981_753889638347402_2885440414377677851_n.jpg?_nc_ht=instagram.fhyd7-1.fna.fbcdn.net" class="w-100">
        </div>
        <div class="col-4">
        <img src="https://instagram.fhyd7-1.fna.fbcdn.net/vp/876d9daa917959904f535cfa35607ada/5DBE2CA9/t51.2885-15/sh0.08/e35/c1.0.748.748a/s640x640/65142981_753889638347402_2885440414377677851_n.jpg?_nc_ht=instagram.fhyd7-1.fna.fbcdn.net" class="w-100">
        </div>
    </div>
</div>
@endsection