<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    protected $fillable = [
        'station_number',
        'pc_name',
        'status',
        'processor',
        'ram',
        'gpu',
        'operating_system',
        'hourly_rate',
        'description',
    ];

    protected $casts = [
        'hourly_rate' => 'decimal:2',
    ];
}