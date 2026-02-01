import React, { useState } from 'react';

function BookingForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter name and email');
      return;
    }
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>Book This Slot</h3>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 8, width: '100%' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px' }}>
        Confirm Booking
      </button>
    </form>
  );
}

export default BookingForm;
