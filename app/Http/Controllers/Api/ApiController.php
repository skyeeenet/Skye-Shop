<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller {

  protected $model;

  public function index() {

    return $this->sendSuccess(200, $this->model::all());
  }

  public function store(Request $request) {

    $this->model::create($request->all());

    return 'okeyCreated';
  }

  public function sendSuccess($status = 200, $data = null)
  {

    return response([
        'success' => true,
        'data' => $data,
    ], $status);
  }

  public function sendFail($status = 400, $data = null)
  {

    return response([
        'success' => false,
        'data' => $data,
    ], $status);
  }
}