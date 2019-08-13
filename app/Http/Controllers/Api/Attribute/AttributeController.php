<?php

namespace App\Http\Controllers\Api\Attribute;

use App\Attribute;
use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Attribute\AttributeRequest;
use App\Repositories\Admin\AttributeRepository;

class AttributeController extends ApiController {

  public function __construct(AttributeRepository $attributeRepository, Attribute $attribute) {

    $this->repository = $attributeRepository;
    $this->model = $attribute;
  }

  public function index() {

    return $this->sendSuccess(200, $this->repository->all($this->model));
  }

  public function store(AttributeRequest $attributeRequest) {

    if ($this->repository->store($attributeRequest, $this->model)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail();
    }
  }

  public function update(Attribute $attribute, AttributeRequest $attributeRequest) {

    if ($this->repository->update($attributeRequest, $attribute)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail();
    }
  }

  public function destroy(Attribute $attribute) {

    if ($this->repository->delete($attribute)) {

      $this->sendSuccess(204);
    } else {

      return $this->sendFail();
    }
  }
}
