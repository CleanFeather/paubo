<?php

namespace App\Http\Requests\Note;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNoteRequest extends FormRequest
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
            'note_id' => 'required|integer',
            'title' => 'required|string|max:50',
            'content' => 'required|string',
            'category_id' => 'required|integer'
        ];
    }
}
