<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = ['name', 'sort_order'];

    public function value() {

      return $this->hasMany(OptionValue::class);
    }
}
