<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
        if (!Redis::get('note_category')){
            $note_category = $category->query()->where('type','note')->orderByDesc('id')->get();
            Redis::set('note_category',serialize($note_category));
        }
        return unserialize(Redis::get('note_category'));
    }
}
