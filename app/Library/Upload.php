<?php
namespace App\Library;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

class Upload
{
    protected $file;

    protected $public_path;

    protected $dirname;

    protected $url;

    public function upload($file,$dirname)
    {
        $dirname = $dirname.'/'.Carbon::now()->year.'/'.Carbon::now()->month;
        $public_path = 'public/'.$dirname;
        if ($img_name = Storage::putFile($public_path,$file)){
            $img_name = explode('/',$img_name);
            $img_name = end($img_name);
            return asset('storage/'.$dirname.'/'.$img_name);
        }
    }
}