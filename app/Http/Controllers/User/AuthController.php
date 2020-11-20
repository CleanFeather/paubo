<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Library\Tools;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function store(LoginRequest $request)
    {
        $field = filter_var($request->username,FILTER_VALIDATE_REGEXP,[
            'options' => [
                'regexp' => Tools::regex('phone')
            ]
        ]) ? 'phone' : 'username';
        $credentials = [
            $field => $request->username,
            'password' => $request->password
        ];
        if (!$token = Auth::guard('api')->attempt($credentials)){
            throw new AuthenticationException('用户名或密码错误');
        }
        return self::responseWithTokens($token);
    }

    public function destroy()
    {
        auth('api')->logout();
        return response()->json(['message' => 'success']);
    }

    protected static function responseWithTokens($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::guard('api')->factory()->getTTL()*60
        ]);
    }

    public function show()
    {
        return auth('api')->user();
    }
}
