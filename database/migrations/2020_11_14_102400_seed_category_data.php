<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class SeedCategoryData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $categories = [
            [
                'name' => 'php',
                'type' => 'note',
            ],
            [
                'name' => 'laravel',
                'type' => 'note',
            ],
            [
                'name' => 'html',
                'type' => 'note',
            ],
            [
                'name' => 'javascript',
                'type' => 'note',
            ],
            [
                'name' => 'css',
                'type' => 'note',
            ],
            [
                'name' => 'vue',
                'type' => 'note',
            ],
            [
                'name' => 'element-ui',
                'type' => 'note',
            ],
            [
                'name' => 'swoole',
                'type' => 'note',
            ],
            [
                'name' => 'linux',
                'type' => 'note',
            ],
            [
                'name' => '绘画',
                'type' => 'album'
            ],
            [
                'name' => '照片',
                'type' => 'album'
            ],
            [
                'name' => '养成好习惯',
                'type' => 'hobby'
            ],
            [
                'name' => '戒掉坏习惯',
                'type' => 'hobby'
            ],
        ];
        DB::table('categories')->insert($categories);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('categories')->truncate();
    }
}
