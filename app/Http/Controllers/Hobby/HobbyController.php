<?php

namespace App\Http\Controllers\Hobby;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hobby\CreateHobbyRequest;
use App\Http\Requests\Hobby\IndexHobbyRequest;
use App\Models\Hobby;
use App\Models\HobbyStage;
use Illuminate\Http\Request;

class HobbyController extends Controller
{
    public function index(IndexHobbyRequest $request,Hobby $hobby)
    {
        $query = $hobby->query();
        if ($request->filled('category_id')){
            $query->where('category_id',$request->category_id);
        }
        $hobbies = $query->get();
        collect($hobbies)->map(function ($item) use ($hobby){
            $item->stages = $hobby->query()->find($item->id)->hobbyStage;
        });
        return response()->json($hobbies);
    }

    public function store(CreateHobbyRequest $request, Hobby $hobby)
    {
        list(
            $hobby->user_id,
            $hobby->name,
            $hobby->days,
            $hobby->category_id,
        ) = [
            auth('api')->user()->id,
            $request->name,
            $request->days,
            $request->category_id
        ];
        if ($hobby->save()){
            collect($request->stages)->each(function ($stage) use ($hobby){
                $hobbyStage = app(HobbyStage::class);
                list(
                    $hobbyStage->hobby_id,
                    $hobbyStage->name,
                    $hobbyStage->description,
                    $hobbyStage->days,
                    $hobbyStage->level,
                ) = [
                    $hobby->id,
                    $stage['name'],
                    $stage['description'],
                    $stage['days'],
                    $stage['level'],
                ];
                $hobbyStage->save();
            });
        }
        return response()->json(['message' => 'success'], 201);
    }
}
