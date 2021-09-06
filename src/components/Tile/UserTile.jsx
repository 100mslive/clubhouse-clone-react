import React from 'react';

const UserTile = ({ children }) => {
  return (
    <div className='m-2 relative flex flex-col justify-center items-center'>
      {children}
    </div>
  );
};

export default UserTile;
