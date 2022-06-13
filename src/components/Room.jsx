import { selectPeers, useHMSStore } from '@100mslive/hms-video-react';
import Footer from '../components/Footer/Footer';
import User from '../components/Tile/User';
import ChatContainer from './Chat/ChatContainer';

const Room = () => {
  const peers = useHMSStore(selectPeers);
  return (
    <div className='flex flex-col pt-4'>
      <div className='flex justify-between items-start'>
        <div className='flex flex-wrap justify-center items-start w-full '>
          {peers.map((p) => (
            <User key={p.id} peer={p} />
          ))}
        </div>
        <ChatContainer />
      </div>
      <Footer count={peers.length} />
    </div>
  );
};

export default Room;
