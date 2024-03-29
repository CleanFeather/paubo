<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;

    protected $fillable = ['name','type','own_to'];

    public function note()
    {
        return $this->hasMany(Note::class);
    }
}
