<?php

namespace App\Repositories\Admin;

use App\Category;
use App\Http\Requests\Category\CategoryRequest;
use App\Repositories\Admin\Interfaces\CategoryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryRepository implements CategoryRepositoryInterface {

    protected $model;

    public function __construct(Category $category) {

        $this->model = $category;
    }

    public function all() {

        return $this->model->all();
    }

    public function store(Request $request) {

        $category = new Category();

        return $category->firstOrCreate([
            'parent_id' => $request->input('parent'),
            'name' => $request->input('name'),
            'slug' => $request->input('slug'),
        ]);
    }

    public function update(Category $category, Request $request) {

        $category->update([
            'name' => $request->name,
            'slug' => $request->slug,
            'parent_id' => $request->parent,
        ]);

        return response(Response::HTTP_OK);
    }

    public function delete(Category $category) {

        $child_categories = Category::where('parent_id', $category->id)->get();

        foreach($child_categories as $child) {

            $child->delete();
        }

        $category->delete();

        return response(Response::HTTP_GONE);
    }
}
