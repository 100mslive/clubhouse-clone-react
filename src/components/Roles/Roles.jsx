import React from 'react';
import MenuIcon from '../../icons/MenuIcon';
import { useHMSActions } from '@100mslive/hms-video-react';

const Permission = ({ audioTrack, id }) => {
  const hmsActions = useHMSActions();
  const mutePeer = () => {
    hmsActions.setRemoteTrackEnabled(audioTrack, false);
  };
  const changeRole = (role) => {
    hmsActions.changeRole(id, role, true);
  };
  const btnClass = 'flex w-32 text-sm font-semibold hover:bg-gray-800 p-2';
  return (
    <div className='absolute right-0 top-0 menu-btn z-50'>
      <div as='button' className='bg-gray-900 rounded-md px-1 relative group'>
        <MenuIcon />
      </div>
      <div className='menu-items py-2 flex-col bg-gray-900 text-gray-500 rounded-md'>
        <button className={btnClass} onClick={() => mutePeer()}>
          Mute
        </button>
        <button className={btnClass} onClick={() => changeRole('listener')}>
          Make Listener
        </button>
        <button className={btnClass} onClick={() => changeRole('speaker')}>
          Make Speaker
        </button>
      </div>
    </div>
  );
};

export default Permission;
