<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Auth\AuthRequest;
use App\Http\Controllers\Controller;
use App\Repositories\Auth\AuthRepository;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends ApiController {

  public function __construct(AuthRepository $authRepository) {

    $this->repository = $authRepository;

    $this->middleware('auth:api')->only('logout');
  }

  public function register(AuthRequest $request) {

    if ($this->repository->register($request)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail();
    }
  }

  public function login(AuthRequest $request) {

    $api_token = $this->repository->login($request);

    if ($api_token) {

      return $this->sendSuccess(200, [

          'api_token' => $api_token,
      ]);
    } else {

      return $this->sendFail();
    }
  }

  public function logout(Request $request) {

    if ($this->repository->logout($request)) {

      return $this->sendSuccess(204);
    } else {

      return $this->sendFail();
    }
  }
}
