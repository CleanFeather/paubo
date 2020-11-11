<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    public $timestamps = false;

    protected $fillable = ['boy_uid','girl_uid','bind_time'];
}
