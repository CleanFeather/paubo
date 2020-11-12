<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\BindPartnerRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Models\Partner;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function store(RegisterRequest $request, User $user)
    {
        $params = $request->only(['username', 'phone', 'gender']);
        $params['password'] = bcrypt($request->password);
        $user->query()->create($params);
        return response()->json(['message' => 'success']);
    }

    public function bind(BindPartnerRequest $request, User $user, Partner $partner)
    {
        if (!$another = $user->query()->where([
            'phone' => $request->phone,
            'gender' => !$request->user()->gender
        ])->first()) {
            abort(403, '无效的用户');
        }
        if (DB::table('users')->where('phone', $request->phone)->whereExists(function ($query) {
            $query->select(DB::raw(1))->from('partners')->whereRaw('users.id = partners.boy_uid or users.id = partners.girl_uid');
        })->first()) {
            abort(403, '人家已经有心上人了');
        }
        if ($request->user()->gender) {
            $boy_uid = $request->user()->id;
            $girl_uid = $another->id;
        } else {
            $girl_uid = $request->user()->id;
            $boy_uid = $another->id;
        }
        $partner->query()->create([
            'boy_uid' => $boy_uid,
            'girl_uid' => $girl_uid
        ]);
        return response()->json(['message' => 'success']);
    }
}
