<?php

namespace App\Repositories\Admin;

use App\Repositories\Admin\Interfaces\OptionRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

class OptionRepository extends Repository implements OptionRepositoryInterface {

  public function all(Model $model) {

    return $model::orderBy('sort_order')->get();
  }
}