import React from 'react';
import UsersIcon from '../../icons/UsersIcon';

const UserCount = ({ count }) => {
  return (
    <div className='flex items-center px-6 py-3 bg-gray-800 text-white font-bold  rounded-3xl space-x-2'>
      <UsersIcon /> <p className='inline-block'>{count}</p>
    </div>
  );
};

export default UserCount;
