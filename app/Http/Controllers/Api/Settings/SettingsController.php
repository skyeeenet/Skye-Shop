<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Api\ApiController;
use App\Setting;

class SettingsController extends ApiController {

  public function __construct(Setting $setting) {

    $this->model = $setting;
  }

}