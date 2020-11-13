<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('title')->index()->comment('笔记标题');
            $table->binary('content')->comment('笔记内容');
            $table->bigInteger('user_id')->index()->comment('作者id');
            $table->bigInteger('category_id')->index()->comment('分类id');
            $table->timestamps();
            $table->index(['user_id','category_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
}
