<?php

namespace App\Http\Controllers\Api\Attribute;

use App\Attribute;
use App\Http\Requests\Attribute\AttributeRequest;
use App\Http\Resources\Attribute\AttributeResource;
use App\Repositories\Admin\AttributeRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class AttributeController extends Controller
{
    private $attributeRepository;

    public function __construct(AttributeRepository $attributeRepository) {

        $this->attributeRepository = $attributeRepository;
    }

    public function index() {

        return response([

            'success' => true,
            'data' => AttributeResource::collection($this->attributeRepository->all())
        ], Response::HTTP_OK);
    }

    public function store(AttributeRequest $attributeRequest) {

        $this->attributeRepository->store($attributeRequest);

        return response([

            'success' => true,
        ],Response::HTTP_CREATED);
    }

    public function update(Attribute $attribute, AttributeRequest $attributeRequest) {

        $this->attributeRepository->update($attribute, $attributeRequest);

        return response([

            'success' => true,
        ],Response::HTTP_OK);
    }

    public function destroy(Attribute $attribute) {

        $this->attributeRepository->delete($attribute);

        return response([

            'success' => true,
        ],Response::HTTP_GONE);
    }
}
