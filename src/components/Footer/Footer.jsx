import React from 'react';
import LeaveButton from '../Buttons/LeaveButton';
import AudioButton from '../Buttons/AudioButton';
import UserCount from '../Buttons/UserCount';

const Footer = ({ count }) => {
  const isLocalAudioEnabled = false;
  return (
    <footer className='flex h-20 bg-gray-100 fixed bottom-0 space-x-4 left-0 w-full items-center justify-center'>
      <UserCount count={count} />
      <AudioButton active={isLocalAudioEnabled} onClick={() => {}} />
      <LeaveButton onClick={() => {}} />
    </footer>
  );
};

export default Footer;
