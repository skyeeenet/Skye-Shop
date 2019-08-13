<?php

namespace App\Http\Controllers\Api\Category;

use App\Category;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Http\Resources\Category\CategoryResource;
use App\Repositories\Admin\CategoryRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends ApiController {

  public function __construct(CategoryRepository $categoryRepository) {

    $this->repository = $categoryRepository;
  }

  /**
   * Return All Categories
   * @return CategoryRepository[]|\Illuminate\Database\Eloquent\Collection
   */
  public function index() {

    return response([

        'data' => CategoryResource::collection($this->repository->all()),
        'errors' => [],
    ], Response::HTTP_OK);

    $categories = Category::all()->toArray();

    $array_cat = [];

    foreach ($categories as $key => $cat) {

      $array_cat[$cat['parent_id']][] = $cat;
    }

    $result = [];

    $this->view_cat($result, $array_cat, 12);

    return $result;


  }

  public function view_cat(&$result, $categories, $parent_id = 0) {

    if (empty($categories[$parent_id])) {

      return;
    }


    for ($i = 0; $i < count($categories[$parent_id]); $i++) {

      $result[] = $categories[$parent_id][$i]['name'];

      $this->view_cat($result, $categories, $categories[$parent_id][$i]['id']);

    }

  }

  /**
   * Store New Category
   * @param Request $request
   * @return Category
   */
  public function store(CategoryRequest $request) {

    return response([

        'data' => new CategoryResource($this->repository->store($request)),
    ], Response::HTTP_CREATED);
  }

  public function update(Category $category, CategoryRequest $request) {


    return $this->repository->update($category, $request);
  }

  /**
   * Delete category
   * @param Category $category
   */
  public function destroy(Category $category) {

    return $this->repository->delete($category);
  }
}
