<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ApiController extends Controller {

  protected $model;
  protected $repository;

  protected function sendSuccess($status = 200, $data = null) {

    return response([
        'success' => true,
        'data' => $data,
    ], $status);
  }

  protected function sendFail($status = 400, $data = null) {

    return response([
        'success' => false,
        'data' => $data,
    ], $status);
  }
}