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


Route::group(['namespace' => 'Api'], function () {

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
  Route::group(['namespace' => 'Attribute'], function () {

    Route::resource('attribute', 'AttributeController');
  });
  /* ATTRIBUTE END */

  Route::group(['namespace' => 'Image'], function () {

    Route::post('image', 'ImageController@store');
    Route::get('image', 'ImageController@index');
    Route::get('image/{image}', 'ImageController@show');
    Route::post('image/delete', 'ImageController@destroy');
  });

  /* GROUP OPTIONS BEGIN */
  Route::group(['namespace' => 'Options'], function () {

    Route::resource('options', 'OptionController');
  });
  /* GROUP OPTIONS END */

  /* OPTIONS BEGIN */
  Route::group(['namespace' => 'Options'], function () {

    Route::resource('option-value', 'OptionValueController');
  });
  /* OPTIONS END */

  /* AUTH BEGIN */
  Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {

    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('/logout', 'AuthController@logout');
  });
  /* AUTH END */

});


