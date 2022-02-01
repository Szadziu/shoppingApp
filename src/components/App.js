import { useContext } from 'react';
import TopBar from './TopBar';
import MenuTab from './MenuTab';
import SettingsTab from './SettingsTab';
import MainSection from './MainSection/MainSection';

const App = () => {
  return (
    <div className='w-screen h-screen relative'>
      <TopBar />
      <MenuTab />
      <SettingsTab />
      <MainSection />
    </div>
  );
};

export default App;
