<?php

namespace App\Helpers\Facades;

use Illuminate\Support\Facades\Facade;

class LangProcessor extends Facade {

    protected static function getFacadeAccessor() {

        return 'LP';
    }
}

