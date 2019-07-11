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
    Route::group(['namespace' => 'Category'], function () {

        Route::resource('category', 'CategoryController');

        /*Route::get('/', 'CategoryController@index')->name('category.index');
        Route::post('/', 'CategoryController@store')->name('category.store');
        Route::put('/{category}', 'CategoryController@update')->name('category.update');
        Route::delete('/{category}', 'CategoryController@destroy')->name('category.destroy');*/
    });
    /* CATEGORY END */


    /* ATTRIBUTE BEGIN */
    Route::group(['namespace' => 'Attribute'], function() {

        route::resource('attribute', 'AttributeController');
    });
    /* ATTRIBUTE END */

    Route::group(['namespace' => 'Image'], function() {

        route::post('image', 'ImageController@store');
        route::get('image', 'ImageController@index');
        route::post('image/delete', 'ImageController@destroy');
    });

    /* AUTH BEGIN */
    Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {

        Route::post('/login', 'AuthController@login');
        Route::post('/register', 'AuthController@register');
        Route::post('/logout', 'AuthController@logout');
    });
    /* AUTH END */

});


