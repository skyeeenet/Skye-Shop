<?php

namespace App\Repositories\Admin\Interfaces;

use App\Attribute;
use Illuminate\Http\Request;

interface AttributeRepositoryInterface {

    public function all();

    public function store(Request $request);

    public function update(Attribute $category, Request $request);

    public function delete(Attribute $category);

}