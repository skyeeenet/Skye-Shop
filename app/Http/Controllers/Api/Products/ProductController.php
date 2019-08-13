<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\ApiController;
use App\Product;
use App\Repositories\Admin\ProductRepository;

class ProductController extends ApiController {

  public function __construct(Product $product, ProductRepository $productRepository) {

    $this->model = $product;
    $this->repository = $productRepository;
  }
}
