<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Requests\Note\CreateNoteRequest;
use App\Http\Requests\Note\DeleteNoteRequest;
use App\Http\Requests\Note\UpdateNoteRequest;
use App\Library\Upload;
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
        return response()->json(['message' => 'success']);
    }

    public function update(UpdateNoteRequest $request,Note $note)
    {
        $note->query()->find($request->note_id)->update($request->except('note_id'));
        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteNoteRequest $request,Note $note)
    {
        $note->query()->find($request->note_id)->delete();
        return response()->json(['message' => 'success']);
    }

    public function upload(Request $request)
    {
        $url = app(Upload::class)->upload($request->file('img'),'note');
        return response()->json([
            'errno' => 0,
            'data' => [
                $url
            ]
        ]);
    }
}
