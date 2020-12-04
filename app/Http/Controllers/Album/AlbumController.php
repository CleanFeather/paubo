<?php

namespace App\Http\Controllers\Album;

use App\Http\Controllers\Controller;
use App\Http\Requests\Album\CreateAlbumRequest;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function store(CreateAlbumRequest $request)
    {
        $file = $request->file('file');
        var_dump($file);
    }
}
