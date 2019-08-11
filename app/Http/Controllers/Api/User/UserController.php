<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Api\ApiController;
use App\Repositories\Auth\UserRepository;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends ApiController{

  public function __construct(UserRepository $userRepository, User $user) {

    $this->repository = $userRepository;
    $this->model = $user;
    $this->middleware('auth:api');
  }

  public function getUserByToken(Request $request) {

    return Auth::user();
  }

  public function getUserRoleByToken(Request $request) {

    $user = Auth::user();
    return $user->role;
  }
}