<?php

namespace App\Http\Controllers\CustomAuth;

use App\Http\Controllers\Controller;

class CustomAuthController extends Controller {

  public function index() {

    return view('auth.register');
  }
}