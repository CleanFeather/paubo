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
            'type' => 'required|numeric',
            'name' => 'required|string',
            'stages' => 'required|array',
            'stages.*.name' => 'required|string',
            'stages.*.description' => 'required|string',
            'stages.*.score' => 'required|numeric',
            'stages.*.level' => 'required|integer',
        ];
    }
}
