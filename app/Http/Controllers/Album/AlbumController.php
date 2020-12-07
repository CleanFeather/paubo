<?php

namespace App\Http\Controllers\Album;

use App\Http\Controllers\Controller;
use App\Http\Requests\Album\CreateAlbumRequest;
use App\Http\Requests\Album\IndexAlbumRequest;
use App\Library\Upload;
use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function index(IndexAlbumRequest $request,Album $album)
    {
        $query = $album->query();
        if ($request->filled('masterpiece')){
            $query->orderBydesc('star')->orderByDesc('created_at');
        }
        return $query->offset(($request->page-1)*$request->limit)->limit($request->limit)->get();
    }

    public function store(CreateAlbumRequest $request,Album $album)
    {
        $album->name = $request->name;
        $album->category_id = $request->category_id;
        $album->star = $request->star;
        $album->user_id = auth('api')->user()->id;
        $album->url = app(Upload::class)->upload($request->file,'album');
        $album->save();
        return response()->json(['message' => 'success'],201);
    }
}
