<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['url', 'thumbnail'];

    public $timestamps = false;

    public function scopeImagesByIds($query, $ids) {

        return $query->where('id', $ids);
    }
}
