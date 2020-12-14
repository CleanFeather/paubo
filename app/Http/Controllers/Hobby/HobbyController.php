<?php

namespace App\Http\Controllers\Hobby;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hobby\CreateHobbyRequest;
use App\Models\Hobby;
use App\Models\HobbyStage;
use Illuminate\Http\Request;

class HobbyController extends Controller
{
    public function index()
    { }

    public function store(CreateHobbyRequest $request, Hobby $hobby, HobbyStage $hobbyStage)
    {
        list(
            $hobby->user_id,
            $hobby->name,
            $hobby->type,
        ) = [
            auth('api')->user()->id,
            $request->name,
            $request->type
        ];
        if ($hobby->save()){
            foreach ($request->stages as $stage){
                list(
                    $hobbyStage->hobby_id,
                    $hobbyStage->name,
                    $hobbyStage->description,
                    $hobbyStage->score,
                    $hobbyStage->level,
                ) = [
                    $hobby->id,
                    $stage['name'],
                    $stage['description'],
                    $stage['score'],
                    $stage['level'],
                ];
                $hobbyStage->save();
            }
        }
        return response()->json(['message' => 'success'], 201);
    }
}
