<?php

include_once 'admin.php';

/* This link will add language in session when they click change */
Route::get('/locale/{locale}', 'Localization\LocalizationController@show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
