<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Availability;
use App\Models\Booking;

class SchedulerController extends Controller
{
    public function getAvailableSlots(Request $request)
    {
        $date = $request->query('date');

        if (!$date) {
            return response()->json(['error' => 'Date parameter is required'], 400);
        }

        // Get all availability for the date
        $availability = Availability::where('date', $date)->get();

        // Get all booked time slots for the date
        $bookedSlots = Booking::where('date', $date)->pluck('time_slot')->toArray();

        $availableSlots = [];

        foreach ($availability as $slot) {
            $start = strtotime($slot->start_time);
            $end = strtotime($slot->end_time);

            // Assuming hourly slots - adjust if needed
            for ($time = $start; $time < $end; $time += 3600) {
                $slotTime = date('H:i:s', $time);
                if (!in_array($slotTime, $bookedSlots)) {
                    $availableSlots[] = $slotTime;
                }
            }
        }

        return response()->json($availableSlots);
    }

    public function bookSlot(Request $request)
    {
        $request->validate([
            'user_name' => 'required|string|max:255',
            'user_email' => 'required|email|max:255',
            'date' => 'required|date',
            'time_slot' => 'required|date_format:H:i:s',
        ]);

        // Check if slot is already booked
        $exists = Booking::where('date', $request->date)
                         ->where('time_slot', $request->time_slot)
                         ->exists();

        if ($exists) {
            return response()->json(['error' => 'This time slot is already booked'], 409);
        }

        // Create booking
        $booking = Booking::create([
            'user_name' => $request->user_name,
            'user_email' => $request->user_email,
            'date' => $request->date,
            'time_slot' => $request->time_slot,
        ]);

        return response()->json(['message' => 'Booking confirmed', 'booking' => $booking], 201);
    }
}
