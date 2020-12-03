<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->string('name')->index()->comment('作品名称');
            $table->bigInteger('category_id')->index()->comment('作品分类');
            $table->tinyInteger('star')->index()->comment('作品评分');
            $table->bigInteger('user_id')->index()->comment('作者uid');
            $table->string('url')->comment('作品上传地址');
            $table->index(['category_id','user_id','star']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('albums');
    }
}
