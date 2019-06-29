<?php

namespace App\Http\Controllers\Api\Category;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Http\Resources\Category\CategoryResource;
use App\Repositories\Admin\CategoryRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryController extends Controller
{

    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) {

        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Return All Categories
     * @return CategoryRepository[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index() {

        return response([

            'data' => CategoryResource::collection($this->categoryRepository->all()),
            'errors' => [],
        ], Response::HTTP_OK) ;
    }

    /**
     * Store New Category
     * @param Request $request
     * @return Category
     */
    public function store(CategoryRequest $request) {

        return response([

            'data' => new CategoryResource($this->categoryRepository->store($request)),
        ], Response::HTTP_CREATED);
    }

    /**
     * Delete category
     * @param Category $category
     */
    public function destroy(Category $category) {

        return $this->categoryRepository->delete($category);
    }
}
