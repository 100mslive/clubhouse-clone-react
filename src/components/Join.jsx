import React, { useState } from 'react';
import Input from './Join/Input';
import JoinButton from './Join/JoinButton';
import Avatar from 'boring-avatars';
import Select from './Join/Select';

const Join = () => {
  const [role, setRole] = useState('speaker');
  const [username, setUsername] = useState('');
  const joinRoom = () => {};
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Avatar size={120} name={username} />
      <Input state={{ username, setUsername }} />
      <Select state={{ role, setRole }} />
      <JoinButton onClick={joinRoom} />
    </div>
  );
};

export default Join;
