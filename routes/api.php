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
        Route::get('auth/user', 'AuthController@show')->name('auth.user');
        // 登出
        Route::delete('logout', 'AuthController@destroy')->name('logout');
        Route::prefix('partner')->group(function () {
            // 绑定伴侣
            Route::post('bind', 'UserController@bind')->name('partner.bind');
        });
    });
});

// 笔记
Route::namespace('Note')->middleware('auth.token')->group(function () {
    Route::prefix('note')->group(function () {
        // 笔记列表
        Route::get('/', 'NoteController@index')->name('note.index');
        // 笔记详情
        Route::get('show', 'NoteController@show')->name('note.show');
        // 创建笔记
        Route::post('/', 'NoteController@store')->name('note.store');
        // 修改笔记
        Route::put('/', 'NoteController@update')->name('note.update');
        // 删除笔记
        Route::delete('/', 'NoteController@delete')->name('note.delete');
        // 上传图片
        Route::post('upload', 'NoteController@upload')->name('note.upload')->withoutMiddleware('auth.token');
        // 笔记类别
        Route::prefix('category')->group(function () {
            Route::get('/', 'CategoryController@index')->name('note.category.index');
        });
    });
});

// 作品
Route::namespace('Album')->middleware('auth.token')->group(function () {
    Route::prefix('album')->group(function () {
        // 作品列表
        Route::get('/', 'AlbumController@index')->name('album.index');
        // 创建作品
        Route::post('/', 'AlbumController@store')->name('album.store');
        // 作品类别
        Route::prefix('category')->group(function () {
            Route::get('/', 'CategoryController@index')->name('album.category.index');
        });
    });
});

// 习惯
Route::namespace('Hobby')->middleware('auth.token')->group(function () {
    // 习惯类型
    Route::prefix('hobby')->group(function () {
        // 习惯列表
        Route::get('/', 'HobbyController@index')->name('hobby.index');
        // 习惯类型
        Route::get('category', 'CategoryController@index')->name('hobby.category.index');
        // 添加习惯
        Route::post('/', 'HobbyController@store')->name('hobby.store');
        // 习惯详情
        Route::get('/show','HobbyController@show')->name('hobby.show');
        Route::prefix('sign')->group(function () {
            // 打卡
            Route::post('/', 'SignController@store')->name('hobby.sign.store');
            // 打卡记录
            Route::get('/','SignController@index')->name('hobby.sign.index');
        });
    });
});
