<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stations', function (Blueprint $table) {
            $table->id();

            $table->string('station_number')->unique();

            $table->string('pc_name');

            $table->enum('status', [
                'Available',
                'Occupied',
                'Maintenance'
            ])->default('Available');

            $table->string('processor')->nullable();

            $table->string('ram')->nullable();

            $table->string('gpu')->nullable();

            $table->string('operating_system')->nullable();

            $table->decimal('hourly_rate', 10, 2)->default(0);

            $table->text('description')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};