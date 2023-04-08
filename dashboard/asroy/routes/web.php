<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes for Frontend 
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/ 
//Route::get('/','App\Http\Controllers\Frontend\PagesController@index')->name('homepage');

Route::get('/', function(){
    return view('welcome');
});
/*
|--------------------------------------------------------------------------
| Web Routes for Backend
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix'=>'admin'], function(){
	Route::get('/dashboard', 'App\Http\Controllers\Backend\PagesController@index')->middleware(['auth'])->name('dashboard'); 

	// Category Route for CRUD

	Route::group(['prefix'=>'category'], function(){
		Route::get('/manage', 'App\Http\Controllers\Backend\CategoryController@index')->name('category.manage'); // read data from database for brands
		Route::get('/create', 'App\Http\Controllers\Backend\CategoryController@create')->name('category.create'); // show html create page
		Route::post('/store', 'App\Http\Controllers\Backend\CategoryController@store')->name('category.store'); // store data into the database 
		Route::get('/edit/{id}', 'App\Http\Controllers\Backend\CategoryController@edit')->name('category.edit');  // edit kore html edit page e dekhano
		Route::post('/edit/{id}', 'App\Http\Controllers\Backend\CategoryController@update')->name('category.update');  // update data and update database value
		Route::post('/destroy/{id}', 'App\Http\Controllers\Backend\CategoryController@destroy')->name('category.destroy'); // delete data from database
	});


});

 
