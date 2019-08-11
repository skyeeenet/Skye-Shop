<?php

namespace App\Http\Controllers\Api\Settings;

use App\Http\Controllers\Api\ApiController;
use App\Repositories\Admin\SettingsRepository;
use App\Setting;

class SettingsController extends ApiController {

  public function __construct(Setting $setting, SettingsRepository $settingsRepository) {

    $this->model = $setting;
    $this->repository = $settingsRepository;
  }

  public function show($req) {

    return $this->sendSuccess(200, $this->repository->show($req, $this->model, 'type'));
  }
}