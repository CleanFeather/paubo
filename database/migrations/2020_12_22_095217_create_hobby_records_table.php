<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHobbyRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hobby_records', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('hobby_id')->index()->comment('习惯id');
            $table->integer('days')->default(1)->comment('计算天数 可正负');
            $table->string('content')->nullable()->comment('说点什么');
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
        Schema::dropIfExists('hobby_records');
    }
}
