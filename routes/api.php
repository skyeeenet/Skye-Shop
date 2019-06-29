<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['namespace' => 'Api'], function() {

    /* CATEGORY BEGIN */
    Route::group(['prefix' => 'category', 'namespace' => 'Category'], function () {

        Route::get('/', 'CategoryController@index')->name('category.index');
        Route::post('/', 'CategoryController@store')->name('category.store');
        Route::delete('/{category}', 'CategoryController@destroy')->name('category.destroy');
    });
    /* CATEGORY END */

});


