import { useContext } from 'react';
import TopBar from './TopBar';
import MenuTab from './MenuTab';
import SettingsTab from './SettingsTab';

const App = () => {
  return (
    <div className='w-screen h-screen relative'>
      <TopBar />
      <MenuTab />
      <SettingsTab />
    </div>
  );
};

export default App;
