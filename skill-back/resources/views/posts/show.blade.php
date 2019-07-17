@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-4 offset-2">
            <img src="/storage/{{$post->image}}" class="w-100" alt="">
        </div>
        <div class="col-4">
            <div class="d-flex align-items-center">
                <div class="pr-3">

                    <img src="{{$post->user->profile->profileImage()}}" style="max-width:40px" class="w-100 rounded-circle" alt="">
                </div>
                <div class="font-weight-bold text-dark">
                    <a href="/profile/{{$post->user->id}}">
                        <span class="font-weight-bold text-dark">{{$post->user->username}}</span>
                    </a>
                    <a href="" class="pl-1">Follow</a>
                
                </div>
            </div>
            <hr>
            <p><span class="font-weight-bold"><a href="/profile/{{$post->user->id}}">
                    <span class="font-weight-bold text-dark">{{$post->user->username}}</span>
                </a></span>
            {{$post->caption}}
            </p>


        </div>
    </div>

</div>
@endsection