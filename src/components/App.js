import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import MenuTab from './MenuTab';
import SettingsTab from './SettingsTab';
import MainSection from './MainSection/MainSection';
const Abc = () => <h1>Nie ma list</h1>;

const App = () => {
  return (
    <div className='w-screen h-screen relative'>
      <TopBar />
      <MenuTab />
      <SettingsTab />
      <Routes>
        <Route path='/' element={<Abc />} />
        <Route path='/:listUrl' element={<MainSection />} />
      </Routes>
    </div>
  );
};

export default App;
