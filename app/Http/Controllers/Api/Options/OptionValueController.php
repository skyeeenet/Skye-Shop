<?php

namespace App\Http\Controllers\Api\Options;

use App\Http\Controllers\Api\ApiController;
use App\OptionValue;
use App\Repositories\Admin\OptionValueRepository;
use Illuminate\Http\Request;

class OptionValueController extends ApiController {

  public function __construct(OptionValueRepository $optionValueRepository, OptionValue $optionValue) {

    $this->repository = $optionValueRepository;
    $this->model = $optionValue;
  }
}