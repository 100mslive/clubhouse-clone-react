import React from 'react';
import UserTile from './UserTile';
import UserWrapper from './UserWrapper';
import UserInfo from './UserInfo';
import {
  useHMSStore,
  selectPeerAudioByID,
  selectIsPeerAudioEnabled,
  selectLocalPeer,
} from '@100mslive/hms-video-react';
import Permission from '../Roles/Roles';

const User = ({ peer }) => {
  const level = useHMSStore(selectPeerAudioByID(peer.id)) || 0;
  const audioEnabled = useHMSStore(selectIsPeerAudioEnabled(peer.id));
  const localPeer = useHMSStore(selectLocalPeer);
  const isModerator = localPeer.roleName === 'moderator';
  return (
    <UserTile>
      {isModerator ? (
        <Permission id={peer.id} audioTrack={peer.audioTrack} />
      ) : null}
      <UserWrapper level={level}>
        <UserInfo audioEnabled={audioEnabled} peer={peer} />
      </UserWrapper>
    </UserTile>
  );
};

export default User;
