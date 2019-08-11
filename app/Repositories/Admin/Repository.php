<?php


namespace App\Repositories\Admin;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

abstract class Repository
{

  public function all(Model $model) {

    return $model::all();
  }

  public function store(Request $request, Model $model) {

    $model->create($request->all());
    return true;
  }

  public function update(Request $request, Model $model) {

    $model->update($request->all());
    return true;
  }

  public function delete(Model $model) {

    $model->delete();
    return true;
  }

}