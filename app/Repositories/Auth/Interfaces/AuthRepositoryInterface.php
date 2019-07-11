<?php

namespace App\Repositories\Auth\Interfaces;


use App\User;
use Illuminate\Http\Request;

interface AuthRepositoryInterface {

    function register(Request $request);

    function login(Request $request);

    function logout(Request $request);

}