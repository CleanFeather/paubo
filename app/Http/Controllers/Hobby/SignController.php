<?php

namespace App\Http\Controllers\Hobby;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hobby\IndexSignRequest;
use App\Http\Requests\Hobby\SignRequest;
use App\Models\HobbySign;
use Illuminate\Http\Request;

class SignController extends Controller
{
    public function store(SignRequest $request,HobbySign $hobbySign)
    {
        $hobbySign->query()->create($request->all());
        return response()->json(['message' => 'success'], 201);
    }

    public function index(IndexSignRequest $request,HobbySign $hobbySign)
    {
        return $hobbySign->query()->whereBetween('date',[$request->start_date,$request->end_date])->get();
    }
}
