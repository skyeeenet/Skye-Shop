<?php

namespace App\Traits;

trait ApiHelper {

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