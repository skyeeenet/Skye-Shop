<?php

namespace App\Http\Controllers\Api\Options;

use App\Http\Controllers\Api\ApiController;
use App\Option;
use App\Repositories\Admin\OptionRepository;
use Illuminate\Http\Request;

class OptionController extends ApiController {

  public function __construct(OptionRepository $optionRepository, Option $option) {

    $this->repository = $optionRepository;
    $this->model = $option;
  }

  public function index() {

    return $this->sendSuccess(200, $this->repository->all($this->model));
  }

  public function store(Request $request) {

    $this->repository->store($request, $this->model);

    return $this->sendSuccess(201);
  }

  public function show(Option $option) {

    return $this->sendSuccess(200, $option);
  }

  public function update(Request $request, Option $option) {

    if ($this->repository->update($request, $option)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail(404);
    }
  }

  public function destroy(Option $option) {

    if ($this->repository->delete($option)) {

      return $this->sendSuccess(204);
    } else {

      return $this->sendFail(404);
    }
  }
}
