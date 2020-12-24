<?php

namespace App\Http\Requests\Hobby;

use Illuminate\Foundation\Http\FormRequest;

class CreateHobbyRequest extends FormRequest
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
            'category_id' => 'required|numeric',
            'name' => 'required|string',
            'days' => 'required|integer',
            'stages' => 'required|array',
            'stages.*.name' => 'required|string',
            'stages.*.description' => 'required|string',
            'stages.*.days' => 'required|numeric',
            'stages.*.level' => 'required|integer',
        ];
    }
}
