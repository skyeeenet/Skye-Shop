<?php

namespace App\Http\Controllers\Api\Options;

use App\Http\Controllers\Api\ApiController;
use App\Option;
use App\Repositories\Admin\OptionRepository;
use Illuminate\Http\Request;

class OptionController extends ApiController {

    private $optionRepository;
    private $model;

    public function __construct(OptionRepository $optionRepository) {

        $this->optionRepository = $optionRepository;
        $this->model = new Option();
    }

    public function index() {

        return $this->sendSuccess(200, $this->optionRepository->all($this->model));
    }

    public function store(Request $request) {

        $this->optionRepository->store($request, $this->model);

        return $this->sendSuccess(201);
    }

    public function show(Option $option) {

        return $this->sendSuccess(200, $option);
    }

    public function update(Request $request, Option $option) {

        if ($this->optionRepository->update($request, $option)) {

            return $this->sendSuccess(201);
        } else {

            return $this->sendFail(404);
        }
    }

    public function destroy(Option $option) {

        if($this->optionRepository->delete($option)) {

            return $this->sendSuccess(204);
        } else {

            return $this->sendFail(404);
        }
    }
}
