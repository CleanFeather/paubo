<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Requests\Note\CreateNoteRequest;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function store(CreateNoteRequest $request,Note $note)
    {
        $note->query()->create($request->all());
        return response()->json([
            'errno' => 0,
            'data' => [
                'https://seopic.699pic.com/photo/50083/9506.jpg_wh1200.jpg',
                'https://seopic.699pic.com/photo/50083/9506.jpg_wh1200.jpg'
            ]
        ]);
    }
}
