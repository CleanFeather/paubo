<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHobbySignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hobby_signs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('hobby_id')->index()->comment('习惯id');
            $table->string('type', 10)->default('sign')->comment('sign:打卡，custom:自定义奖惩');
            $table->integer('days')->default(1)->comment('计算天数 可正负');
            $table->string('content')->nullable()->comment('说点什么');
            $table->date('date')->comment('打卡日期');
            $table->index(['hobby_id', 'type', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hobby_signs');
    }
}
