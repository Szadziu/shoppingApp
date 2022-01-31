import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/generics/Button';
import Title from 'components/generics/Title';
import { AppStateContext } from 'contexts/AppState';

const MenuTab = () => {
  const { isSideMenuVisible, setIsSideMenuVisible } =
    useContext(AppStateContext);

  function handleCloseMenu() {
    setIsSideMenuVisible(false);
  }

  return (
    <AnimatePresence>
      {isSideMenuVisible && (
        <motion.div
          className='h-screen w-4/6 absolute bg-gray-800 top-0 left-0 shadow-2xl rounded-r-lg'
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
        >
          <Button
            icon={faTimes}
            className='absolute top-3 right-5 text-4xl'
            iconClassName='text-white'
            onClick={handleCloseMenu}
          />
          <Title className='text-white text-5xl relative top-16 ml-2'>
            mShoper
          </Title>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuTab;
