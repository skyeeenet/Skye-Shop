<?php

namespace App\Http\Controllers\Api\Options;

use App\Http\Controllers\Api\ApiController;
use App\Option;
use App\OptionValue;
use App\Repositories\Admin\OptionValueRepository;
use Illuminate\Http\Request;

class OptionValueController extends ApiController {

  public function __construct(OptionValueRepository $optionValueRepository, OptionValue $optionValue) {

    $this->repository = $optionValueRepository;
    $this->model = $optionValue;
  }

  public function index() {

    return $this->sendSuccess(200, $this->repository->all($this->model));
  }

  public function store(Request $request) {

    $this->repository->store($request, $this->model);

    return $this->sendSuccess(201);
  }

  public function show(OptionValue $option) {

    return $this->sendSuccess(200, $option);
  }

  public function update(Request $request, OptionValue $option) {

    if ($this->repository->update($request, $option)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail(404);
    }
  }

  public function destroy(OptionValue $option) {

    if ($this->repository->delete($option)) {

      return $this->sendSuccess(204);
    } else {

      return $this->sendFail(404);
    }
  }
}