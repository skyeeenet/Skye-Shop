<?php

namespace App\Http\Controllers\Api\Options;

use App\Http\Controllers\Api\ApiController;
use App\OptionValue;
use App\Repositories\Admin\OptionValueRepository;
use Illuminate\Http\Request;

class OptionValueController extends ApiController {

  private $optionValueRepository;
  private $model;

  public function __construct(OptionValueRepository $optionValueRepository) {

    $this->optionValueRepository = $optionValueRepository;
    $this->model = new OptionValue();
  }

  public function index() {

    return $this->sendSuccess(200, $this->optionValueRepository->all($this->model));
  }

  public function show(OptionValue $option_value) {

    return $this->sendSuccess(200, $option_value->whereId($option_value->id)
                                                      ->with('image', 'group')
                                                      ->first());
  }

  public function store(Request $request) {

    if($this->optionValueRepository->store($request, $this->model)) {

      return $this->sendSuccess();

    } else {

      return $this->sendFail();
    }
  }

  public function update(Request $request, OptionValue $option_value) {

    if ($this->optionValueRepository->update($request, $option_value)) {

      return $this->sendSuccess();

    } else {

      return $this->sendFail();
    }
  }

  public function destroy(OptionValue $option_value) {

    if ($this->optionValueRepository->delete($option_value)) {

      return $this->sendSuccess(204);

    } else {

      return $this->sendFail();
    }
  }
}