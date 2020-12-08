<?php

namespace App\Http\Controllers\Album;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
        if (!Redis::get('album_category')){
            $album_category = $category->query()->where('type','album')->orderByDesc('id')->get();
            Redis::set('album_category',serialize($album_category));
        }
        return unserialize(Redis::get('album_category'));
    }
}
