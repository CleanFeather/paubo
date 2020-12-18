<?php

namespace App\Http\Controllers\Hobby;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
        if (!Redis::get('hobby_category')){
            $hobby_category = $category->query()->where('type','hobby')->get();
            Redis::set('hobby_category',serialize($hobby_category));
        }
        return unserialize(Redis::get('hobby_category'));
    }
}
