<?php

namespace App\Repositories\Auth\Interfaces;

use App\User;
use Illuminate\Http\Request;

interface UserRepositoryInterface {

  function getUserByToken(Request $request);
  function getUserRoleByUser(User $user);
}