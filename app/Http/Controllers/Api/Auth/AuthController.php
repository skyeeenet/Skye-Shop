<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Auth\AuthRequest;
use App\Http\Controllers\Controller;
use App\Repositories\Auth\AuthRepository;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller {

    protected $authRepository;

    public function __construct(AuthRepository $authRepository) {

        $this->authRepository = $authRepository;

        $this->middleware('auth:api')->only('logout');
    }

    public function register(AuthRequest $request) {

        $this->authRepository->register($request);

        return response([
            'status' => 'success'
        ],Response::HTTP_CREATED);
    }

    public function login(AuthRequest $request) {

        $api_token = $this->authRepository->login($request);

        return response([
            'status' => 'success',
            'data' => [
                'api_token' => $api_token,
            ],
        ], Response::HTTP_OK);
    }

    public function logout(Request $request) {

        return $this->authRepository->logout($request);
    }
}
