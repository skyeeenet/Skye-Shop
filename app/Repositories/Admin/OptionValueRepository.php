<?php


namespace App\Repositories\Admin;

class OptionValueRepository extends Repository {

  public function all($optionValue) {

    return $optionValue->with('image', 'group')->orderBy('option_id')->get();
  }
}