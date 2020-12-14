<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hobby extends Model
{
    protected $fillable = ['name','type'];

    public function hobbyStage()
    {
        return $this->hasMany(HobbyStage::class);
    }
}
