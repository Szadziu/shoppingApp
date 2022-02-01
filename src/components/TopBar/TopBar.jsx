import cn from 'classnames';
import { useContext } from 'react';
import { faBars, faCog, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/generics/Button';
import { AppStateContext } from 'contexts/AppState';

const TopBar = (isVisible) => {
  const {
    setIsSideMenuVisible,
    setIsSettingsMenuVisible,
    searcherValue,
    setSearcherValue,
    listToBuy,
    setListToBuy,
  } = useContext(AppStateContext);

  const addButtonClassnames = cn('absolute right-0 bottom-0 mr-4 mb-4', {
    ['grayscale']: !searcherValue,
  });

  // const a = {
  //     ...(isVisible ? {name: "Alicja"}: {}),
  //     ...(isVisible && coś innego ? {age: 30}: {}),
  // }

  const addItemToBuyList = () => {
    const newItem = {
      id: Math.random().toFixed(3) * 1000,
      name: searcherValue,
    };

    setListToBuy([...listToBuy, newItem]);
    setSearcherValue('');
  };

  function openSideMenu() {
    setIsSideMenuVisible(true);
    setIsSettingsMenuVisible(false);
  }
  function openSettingsMenu() {
    setIsSettingsMenuVisible(true);
    setIsSideMenuVisible(false);
  }
  function handleSearcher(e) {
    setSearcherValue(e.target.value);
  }

  return (
    <>
      <div className='flex justify-between items-center shadow shadow-stone-500 bg-amber-500 w-full h-1/10 px-5'>
        <Button icon={faBars} className='text-4xl' onClick={openSideMenu} />
        <input type='text' value={searcherValue} onChange={handleSearcher} />
        <Button icon={faCog} className='text-4xl' onClick={openSettingsMenu} />
      </div>
      <Button
        icon={faPlusCircle}
        className={addButtonClassnames}
        iconClassName='text-6xl text-green-500 '
        onClick={addItemToBuyList}
        disabled={!searcherValue}
      />
    </>
  );
};

export default TopBar;
