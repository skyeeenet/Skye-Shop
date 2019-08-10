<?php

namespace App\Repositories\Auth;

use App\Repositories\Admin\Repository;
use App\Repositories\Auth\Interfaces\UserRepositoryInterface;
use App\User;
use Illuminate\Http\Request;

class UserRepository implements UserRepositoryInterface {

  function getUserByToken(Request $request) {

    return User::whereToken($request->api_token)->firstOrFail();
  }

  function getUserRoleByUser(User $user) {


  }
}