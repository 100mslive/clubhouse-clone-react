import Join from './components/Join';
import Room from './components/Room';
import './App.css';

const SpacesApp = () => {
  const isConnected = false;
  return <>{isConnected ? <Room /> : <Join />}</>;
};

function App() {
  return (
    <div className='page'>
      <SpacesApp />
    </div>
  );
}

export default App;
