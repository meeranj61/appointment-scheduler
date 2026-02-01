import React from 'react';

function Confirmation({ status }) {
  const { success, message } = status;

  return (
    <div
      style={{
        padding: 15,
        backgroundColor: success ? '#d4edda' : '#f8d7da',
        color: success ? '#155724' : '#721c24',
        borderRadius: 4,
        marginBottom: 20,
      }}
    >
      {message}
    </div>
  );
}

export default Confirmation;
