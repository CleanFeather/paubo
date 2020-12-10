<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHobbyStagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hobby_stages', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('hobby_id')->index()->comment('习惯id');
            $table->string('name')->comment('阶段名称');
            $table->string('description')->nullable()->comment('阶段描述');
            $table->integer('score')->comment('阶段分数');
            $table->tinyInteger('level')->comment('阶段级别（第几阶段）');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hobby_stages');
    }
}
