<?php

namespace App\Http\Requests\Album;

use Illuminate\Foundation\Http\FormRequest;

class IndexAlbumRequest extends FormRequest
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
            'page' => 'required|integer',
            'limit' => 'required|integer',
            'masterpiece' => 'boolean',
            'category_id' => 'integer|nullable'
        ];
    }
}
