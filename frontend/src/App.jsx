import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DateSelector from './components/DateSelector';
import AvailableSlots from './components/AvailableSlots';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(null);

  useEffect(() => {
    const fetchSlots = async () => {
      const dateStr = selectedDate.toISOString().split('T')[0];
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/available-slots?date=${dateStr}`);
        setSlots(response.data);
        setSelectedSlot(null); // reset selected slot when date changes
        setBookingStatus(null); // reset booking status when date changes
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, [selectedDate]);

  const handleBooking = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/book-slot', {
        user_name: userData.name,
        user_email: userData.email,
        date: selectedDate.toISOString().split('T')[0],
        time_slot: selectedSlot,
      });
      setBookingStatus({ success: true, message: response.data.message });
    } catch (error) {
      setBookingStatus({ success: false, message: error.response?.data?.error || 'Booking failed' });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Appointment Scheduler</h1>
      <DateSelector onDateChange={setSelectedDate} />
      <AvailableSlots slots={slots} selectedSlot={selectedSlot} onSelectSlot={setSelectedSlot} />
      {selectedSlot && <BookingForm onSubmit={handleBooking} />}
      {bookingStatus && <Confirmation status={bookingStatus} />}
    </div>
  );
}

export default App;
