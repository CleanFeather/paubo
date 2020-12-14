<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HobbyStage extends Model
{
    public $timestamps = false;

    protected $fillable = ['name','description','score'];

    public function hobby()
    {
        return $this->belongsTo(Hobby::class);
    }
}
