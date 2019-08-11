<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ApiController extends Controller {

  protected $model;
  protected $repository;

  public function index() {

    return $this->sendSuccess(200, $this->repository->all($this->model));
  }

  public function store(Request $request) {

    if($this->repository->store($request, $this->model)) {

      return $this->sendSuccess(201);

    } else {

      return $this->sendFail();
    }
  }

  public function show($req) {

    return $this->sendSuccess(200, $this->repository->show($req, $this->model));
  }

  public function update(Request $request, $req) {

    $foundModel = $this->model->findOrFail($req);

    if ($this->repository->update($request, $foundModel)) {

      return $this->sendSuccess();
    } else {

      return $this->sendFail();
    }
  }

  public function destroy($req) {

    $foundModel = $this->model->findOrFail($req);

    if ($this->repository->delete($foundModel)) {

      return $this->sendSuccess(204);

    } else {

      return $this->sendFail();
    }
  }

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