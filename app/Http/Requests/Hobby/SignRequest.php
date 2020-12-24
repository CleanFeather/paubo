<?php

namespace App\Http\Requests\Hobby;

use Illuminate\Foundation\Http\FormRequest;

class SignRequest extends FormRequest
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
            'hobby_id' => 'required|integer',
            'type' => 'in:sign,custom',
            'content' => 'string|nullable',
            'days' => 'integer',
            'date' => 'required|date'
        ];
    }
}
