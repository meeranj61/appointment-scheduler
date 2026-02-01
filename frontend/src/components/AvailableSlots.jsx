import React from 'react';

function AvailableSlots({ slots, selectedSlot, onSelectSlot }) {
  if (!slots || slots.length === 0) {
    return <p>No available slots for this date.</p>;
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Available Slots</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {slots.map((slot) => {
          const time = slot.time_slot || slot.time || slot; // adapt depending on your API response
          const isSelected = selectedSlot === time;
          return (
            <button
              key={time}
              style={{
                padding: '10px 15px',
                backgroundColor: isSelected ? '#4caf50' : '#e0e0e0',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
              onClick={() => onSelectSlot(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableSlots;
