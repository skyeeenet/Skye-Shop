<?php

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function() {

    Route::get('/', 'DashBoardController@index')->name('admin.dashboard.index');


    /* CATEGORY BEGIN */
    Route::group(['prefix' => 'category', 'namespace' => 'Category'], function () {

        Route::get('/', 'CategoryController@index')->name('admin.category.index');
    });
    /* CATEGORY END */
});
