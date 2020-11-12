<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->comment('用户名');
            $table->string('email')->nullable()->unique()->comment('电子邮箱');
            $table->string('phone')->unique()->comment('手机号');
            $table->string('password')->comment('密码');
            $table->tinyInteger('gender')->comment('性别');
            $table->timestamps();
            $table->index(['phone','gender']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
