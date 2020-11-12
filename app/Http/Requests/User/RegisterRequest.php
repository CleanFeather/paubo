<?php

namespace App\Http\Requests\User;

use App\Library\Tools;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|string|between:2,8',
            'phone' => [
                'required',
                'string',
                'regex:'.Tools::regex('phone'),
            ],
            'gender' => 'required|in:0,1',
            'password' => 'required|string|between:6,32|confirmed',
            'password_confirmation' => 'required|string'
        ];
    }
}