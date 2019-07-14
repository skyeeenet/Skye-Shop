<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OptionValue extends Model
{
    protected $fillable = ['option_id', 'name', 'image_id', 'sort_order'];

    public function image() {

      return $this->belongsTo(Image::class);
    }

    public function group() {

      return $this->belongsTo(Option::class, 'option_id', 'id');
    }
}
