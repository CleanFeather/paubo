<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Requests\Note\CreateNoteRequest;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index(Note $note)
    {
        return $note->query()->orderByDesc('id')->get(['id','title','user_id','category_id','created_at']);
    }

    public function show(Request $request,Note $note)
    {
        $this->validate($request,[
            'note_id' => 'required'
        ]);
        return $note->query()->find($request->note_id);
    }

    public function store(CreateNoteRequest $request,Note $note)
    {
        $params = $request->all();
        $params['user_id'] = $request->user()->id;
        $note->query()->create($params);
        return response()->json([
            'errno' => 0,
            'data' => [
                'https://seopic.699pic.com/photo/50083/9506.jpg_wh1200.jpg',
                'https://seopic.699pic.com/photo/50083/9506.jpg_wh1200.jpg'
            ]
        ]);
    }
}
