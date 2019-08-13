<?php

namespace App\Repositories\Auth;

use App\Repositories\Auth\Interfaces\AuthRepositoryInterface;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthRepository implements AuthRepositoryInterface {

  function register(Request $request) {

    $user = new User([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'birthday' => $request->birthday,
        'role_id' => 0,
        'phone' => $request->phone,
    ]);

    $user->save();

    return true;
  }

  function login(Request $request) {

    $user = User::where('email', $request->email)->firstOrFail();

    if (Hash::check($request->password, $user->password)) {

      $api_token = Str::random(60);

      $user->api_token = $api_token;

      $user->save();

      return $user->api_token;
    } else {

      return false;
    }
  }

  function logout(Request $request) {

    $user = $request->user();

    $user->api_token = null;

    $user->save();

    return true;
  }
}