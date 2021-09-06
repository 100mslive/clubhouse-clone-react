import React from 'react';
import UserTile from './UserTile';
import UserWrapper from './UserWrapper';
import UserInfo from './UserInfo';

const User = ({ peer }) => {
  const audioEnabled = false;
  const level = 0;
  return (
    <UserTile>
      <UserWrapper level={level}>
        <UserInfo audioEnabled={audioEnabled} peer={peer} />
      </UserWrapper>
    </UserTile>
  );
};

export default User;
