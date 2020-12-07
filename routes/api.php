<?php

use Illuminate\Support\Facades\Route;

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

// 测试
Route::any('test', function () {
    return auth('api')->user();
})->middleware('auth.token');

// 用户操作
Route::namespace('User')->group(function () {
    Route::prefix('user')->group(function () {
        // 注册
        Route::post('store', 'UserController@store')->name('user.store');
    });
    // 登录
    Route::post('login', 'AuthController@store')->name('login');
    Route::middleware('auth.token')->group(function () {
        Route::get('auth/user','AuthController@show')->name('auth.user');
        // 登出
        Route::delete('logout', 'AuthController@destroy')->name('logout');
        Route::prefix('partner')->group(function () {
            // 绑定伴侣
            Route::post('bind', 'UserController@bind')->name('partner.bind');
        });
    });
});

// 笔记
Route::namespace('Note')->middleware('auth.token')->group(function (){
    Route::prefix('note')->group(function (){
        // 笔记列表
        Route::get('/','NoteController@index')->name('note.index');
        // 笔记详情
        Route::get('show','NoteController@show')->name('note.show');
        // 创建笔记
        Route::post('/','NoteController@store')->name('note.store');
        // 修改笔记
        Route::put('/','NoteController@update')->name('note.update');
        // 删除笔记
        Route::delete('/','NoteController@delete')->name('note.delete');
        // 上传图片
        Route::post('upload','NoteController@upload')->name('note.upload')->withoutMiddleware('auth.token');
        // 笔记
        Route::prefix('category')->group(function (){
            Route::get('/','CategoryController@index')->name('note.category.index')->withoutMiddleware('auth.token');
        });
    });
});

// 画册
Route::namespace('Album')->middleware('auth.token')->group(function (){
    Route::prefix('album')->group(function (){
        // 画册列表
        Route::get('/','AlbumController@index')->name('album.index');
        // 创建绘画
        Route::post('/','AlbumController@store')->name('album.store');
    });
});