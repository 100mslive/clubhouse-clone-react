import React from 'react';

const JoinButton = ({ onClick }) => {
  return (
    <button
      type='button'
      onClick={() => onClick()}
      className='px-6 py-3 w-80 bg-brand-100 text-white font-bold hover:opacity-80 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none'
    >
      Join Room
    </button>
  );
};

export default JoinButton;
