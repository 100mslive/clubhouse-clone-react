import React from 'react';
import MicOffIcon from '../../icons/MicOffIcon';
import MicOnIcon from '../../icons/MicOnIcon';
import Avatar from 'boring-avatars';

const UserInfo = ({ peer, audioEnabled }) => {
  return (
    <>
      <div className='absolute w-full h-full flex flex-col items-center justify-center text-center z-20'>
        <p className='font-bold text-sm'>{peer.name}</p>
        <p className='flex items-center font-semibold text-gray-400 text-xs'>
          {audioEnabled ? (
            <MicOnIcon stroke='#FFF' height={15} />
          ) : (
            <MicOffIcon stroke='#ff677d' height={15} />
          )}{' '}
          {peer.roleName}
        </p>
      </div>
      <div className='opacity-50'>
        <Avatar variant='marble' size={90} name={peer.name} />
      </div>
    </>
  );
};

export default UserInfo;
