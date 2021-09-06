import React from 'react';

const LeaveButton = ({ onClick }) => {
  return (
    <button
      className='px-6 py-3 w-40 bg-red-600 text-white font-bold hover:opacity-80 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none'
      onClick={onClick}
    >
      Leave
    </button>
  );
};

export default LeaveButton;
