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
            $table->string('category_id')->comment('习惯类型');
            $table->integer('days')->default(0)->comment('目标天数');
            $table->integer('keep_days')->default(0)->comment('已坚持天数');
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
        Schema::dropIfExists('hobbies');
    }
}
