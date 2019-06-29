<?php

namespace App\Repositories\Admin\Interfaces;

use Illuminate\Http\Request;

interface CategoryRepositoryInterface {

    public function all();

    public function store(Request $request);
}
