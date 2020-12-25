<?php

namespace App\Http\Controllers\Hobby;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hobby\IndexSignRequest;
use App\Http\Requests\Hobby\SignRequest;
use App\Models\Hobby;
use App\Models\HobbySign;

class SignController extends Controller
{
    public function store(SignRequest $request,Hobby $hobby, HobbySign $hobbySign)
    {
        $hobbySign->query()->create($request->all());
        $hobby->query()->find($request->hobby_id)->increment('keep_days',$request->days);
        return response()->json(['message' => 'success'], 201);
    }

    public function index(IndexSignRequest $request,HobbySign $hobbySign)
    {
        $query = $hobbySign->query()->where('hobby_id',$request->hobby_id)->whereBetween('date',[$request->start_date,$request->end_date]);
        if ($request->filled('type')){
            $query->where('type','sign');
        }
        return $query->orderByDesc('id')->get();
    }
}
