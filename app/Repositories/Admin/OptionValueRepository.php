<?php

namespace App\Repositories\Admin;

use Illuminate\Database\Eloquent\Model;

class OptionValueRepository extends Repository {

  public function all(Model $model) {

    return $model->with('image', 'group')->orderBy('option_id')->get();
  }

  public function show($req, Model $model, $column = 'id') {

    return $model->whereId($req)
                 ->with('image', 'group')
                 ->first();
  }
}