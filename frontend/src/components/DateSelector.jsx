import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector({ onDateChange }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label>Select Date: </label>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
      />
    </div>
  );
}

export default DateSelector;
