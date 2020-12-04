<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Requests\Note\CreateNoteRequest;
use App\Http\Requests\Note\DeleteNoteRequest;
use App\Http\Requests\Note\IndexNoteRequest;
use App\Http\Requests\Note\UpdateNoteRequest;
use App\Library\Upload;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index(IndexNoteRequest $request)
    {
        $query = auth('api')->user()->note();
        if ($request->filled('category_id')){
            $query->where('category_id',$request->category_id);
        }
        $count = $query->count();
        $data = $query->orderByDesc('id')->offset(($request->page - 1) * $request->limit)
            ->limit($request->limit)
            ->get(['id', 'title', 'user_id', 'category_id', 'created_at']);
        return response()->json([
            'data' => $data,
            'count' => $count
        ]);
    }

    public function show(Request $request, Note $note)
    {
        $this->validate($request, [
            'note_id' => 'required'
        ]);
        return $note->query()->find($request->note_id);
    }

    public function store(CreateNoteRequest $request, Note $note)
    {
        $note->title = $request->title;
        $note->content = $request->content;
        $note->category_id = $request->category_id;
        $note->user_id = auth('api')->user()->id;
        $note->save();
        return response()->json(['message' => 'success'],201);
    }

    public function update(UpdateNoteRequest $request, Note $note)
    {
        $note->query()->find($request->note_id)->update($request->except('note_id'));
        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteNoteRequest $request, Note $note)
    {
        $note->query()->find($request->note_id)->delete();
        return response()->json(['message' => 'success']);
    }

    public function upload(Request $request)
    {
        $url = app(Upload::class)->upload($request->file('img'), 'note');
        return response()->json([
            'errno' => 0,
            'data' => [
                $url
            ]
        ]);
    }
}
