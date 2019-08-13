<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\ApiController;
use App\Option;
use App\Product;
use App\Repositories\Admin\ProductRepository;
use Illuminate\Http\Request;

class ProductController extends ApiController {

  public function __construct(Product $product, ProductRepository $productRepository) {

    $this->model = $product;
    $this->repository = $productRepository;
  }

  public function index() {

    return $this->sendSuccess(200, $this->repository->all($this->model));
  }

  public function store(Request $request) {

    $this->repository->store($request, $this->model);

    return $this->sendSuccess(201);
  }

  public function show(Product $option) {

    return $this->sendSuccess(200, $option);
  }

  public function update(Request $request, Product $option) {

    if ($this->repository->update($request, $option)) {

      return $this->sendSuccess(201);
    } else {

      return $this->sendFail(404);
    }
  }

  public function destroy(Product $option) {

    if ($this->repository->delete($option)) {

      return $this->sendSuccess(204);
    } else {

      return $this->sendFail(404);
    }
  }
}
