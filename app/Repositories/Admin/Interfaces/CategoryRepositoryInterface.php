<?php

namespace App\Repositories\Admin\Interfaces;

use App\Category;
use Illuminate\Http\Request;

interface CategoryRepositoryInterface {

    public function all();

    public function store(Request $request);

    public function update(Category $category, Request $request);

    public function delete(Category $category);
}
