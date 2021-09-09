import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from '@100mslive/hms-video-react';
import Join from './components/Join';
import Room from './components/Room';
import './App.css';

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return <>{isConnected ? <Room /> : <Join />}</>;
};

function App() {
  return (
    <HMSRoomProvider>
      <div className='page'>
        <SpacesApp />
      </div>
    </HMSRoomProvider>
  );
}

export default App;
