import React from 'react';
import MicOnIcon from '../../icons/MicOnIcon';
import MicOffIcon from '../../icons/MicOffIcon';

const AudioButton = ({ active, onClick }) => {
  return (
    <button
      className={`p-3 rounded-full ${active ? 'bg-brand-100' : 'bg-red-600'}`}
      onClick={onClick}
    >
      {active ? <MicOnIcon /> : <MicOffIcon />}
    </button>
  );
};

export default AudioButton;
