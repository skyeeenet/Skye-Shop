<?php

namespace App\Http\Controllers\Localization;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LocalizationController extends Controller
{

    /**
     * Change Localization
     */
    public function show($locale) {

        \Session::put('locale', $locale);
        return redirect()->back();
    }
}
