<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHobbiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hobbies', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->index()->comment('用户id');
            $table->string('name')->comment('习惯名称');
            $table->string('type')->comment('习惯类型：good/bad');
            $table->integer('score')->default(0)->comment('分数：100分满');
            $table->timestamps();
            $table->index(['user_id','type']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hobbies');
    }
}
