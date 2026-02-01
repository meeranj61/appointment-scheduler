<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SchedulerController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/available-slots', [SchedulerController::class, 'getAvailableSlots']);
Route::post('/api/book-slot', [SchedulerController::class, 'bookSlot']);
