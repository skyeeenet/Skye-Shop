<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Controllers\Controller;
use App\Repositories\Admin\CategoryRepository;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) {

        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Show all categories
     * @return Response
     */

    public function index() {

        $categories = $this->categoryRepository->all();
        return view('admin.category.index', compact('categories'));
    }
}
