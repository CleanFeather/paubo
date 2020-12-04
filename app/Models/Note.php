<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Note extends Model
{
    protected $fillable = ['title','content','category_id'];

    protected $appends = ['user_name','category_name'];

    public function getUserNameAttribute()
    {
        return $this->user->username;
    }

    public function getCategoryNameAttribute()
    {
        return $this->category->name;
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
