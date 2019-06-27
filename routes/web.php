<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {

    Route::get('/', 'Admin\DashBoardController@index')->name('admin.dashboard.index');

});

/* This link will add language in session when they click change */
Route::get('/locale/{locale}', 'Localization\LocalizationController@show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
