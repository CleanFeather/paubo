<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Album extends Model
{
    protected $fillable = ['name','category_id','star'];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->toDateString();
    }
}
