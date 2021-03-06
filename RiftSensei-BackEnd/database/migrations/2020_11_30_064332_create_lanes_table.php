<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lanes', function (Blueprint $table) {
            $table->string('user_id');
            $table->string('ad_id');
            $table->boolean('toplane');
            $table->boolean('midlane');
            $table->boolean('jungle');
            $table->boolean('support');
            $table->boolean('botlane');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lanes');
    }
}
