import React, { useState } from 'react';
import Input from './Join/Input';
import JoinButton from './Join/JoinButton';
import Avatar from 'boring-avatars';
import Select from './Join/Select';
import getToken from '../utils/getToken';
import { useHMSActions } from '@100mslive/hms-video-react';

const Join = () => {
  const hmsActions = useHMSActions();
  const [role, setRole] = useState('speaker');
  const [username, setUsername] = useState('');
  const joinRoom = () => {
    getToken(role)
      .then((token) => {
        hmsActions.join({
          userName: username || 'Anonymous',
          authToken: token,
          settings: {
            isAudioMuted: true,
          },
          initEndpoint : process.env.REACT_APP_HMS_INIT_PEER_ENPOINT || undefined
        });
      })
      .catch((error) => {
        console.log('Token API Error', error);
      });
  };
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
