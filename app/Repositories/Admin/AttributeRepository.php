<?php

namespace App\Repositories\Admin;

use App\Attribute;
use App\Repositories\Admin\Interfaces\AttributeRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AttributeRepository implements AttributeRepositoryInterface {

    protected $model;

    public function __construct(Attribute $attribute) {

        $this->model = $attribute;
    }

    public function all() {

        return $this->model->all();
    }

    public function store(Request $request)
    {
        $attribute = new Attribute([

            'name' => $request->name,
            'slug' => $request->slug
        ]);

        $attribute->save();

        return true;
    }

    public function update(Attribute $attribute, Request $request)
    {
        $attribute->update([

            'name' => $request->name,
            'slug' => $request->slug
        ]);

        return true;
    }

    public function delete(Attribute $attribute)
    {
        $attribute->delete();

        return true;
    }
}