<?php
namespace App\Library;

class Tools
{
    public static function regex(string $pattern)
    {
        $patterns = [
            'phone' => '/^1(3([0-35-9]\d|4[1-8])|4[14-9]\d|5([0-35689]\d|7[1-79])|66\d|7[2-35-8]\d|8\d{2}|9[13589]\d)\d{7}$/',
        ];
        return $patterns[$pattern];
    }
}