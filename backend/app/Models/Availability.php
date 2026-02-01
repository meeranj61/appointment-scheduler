<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    protected $table = 'availability';  // explicitly set table name

    protected $fillable = ['date', 'start_time', 'end_time'];
}
