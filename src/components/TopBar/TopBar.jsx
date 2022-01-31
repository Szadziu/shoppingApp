import cn from 'classnames';
import { useContext } from 'react';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/generics/Button';
import { AppStateContext } from 'contexts/AppState';

const TopBar = (isVisible) => {
  const { setIsSideMenuVisible, setIsSettingsMenuVisible } =
    useContext(AppStateContext);

  // const searchBarClassnames = cn(
  //     "flex flex-wrap bg-red400",
  //     { [isVisible]: "opacity-0"}
  // )

  // const a = {
  //     ...(isVisible ? {name: "Alicja"}: {}),
  //     ...(isVisible && coś innego ? {age: 30}: {}),
  // }

  function openSideMenu() {
    setIsSideMenuVisible(true);
    setIsSettingsMenuVisible(false);
  }
  function openSettingsMenu() {
    setIsSettingsMenuVisible(true);
    setIsSideMenuVisible(false);
  }

  return (
    <div className='flex justify-between items-center shadow shadow-stone-500 bg-amber-500 w-full h-1/10 px-5'>
      <Button icon={faBars} className='text-4xl' onClick={openSideMenu} />
      <input type='text' />
      <Button icon={faCog} className='text-4xl' onClick={openSettingsMenu} />
    </div>
  );
};

export default TopBar;
