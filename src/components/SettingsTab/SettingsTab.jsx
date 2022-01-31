import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/generics/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { AppStateContext } from 'contexts/AppState';

const SettingsTab = () => {
  const { isSettingsMenuVisible, setIsSettingsMenuVisible } =
    useContext(AppStateContext);

  const handleCloseMenu = function () {
    setIsSettingsMenuVisible(false);
  };

  return (
    <AnimatePresence>
      {isSettingsMenuVisible && (
        <motion.div
          className='w-3/4 h-2/5 bg-gray-800 absolute top-0 right-0 shadow-2xl rounded-bl-lg'
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
        >
          <Button
            onClick={handleCloseMenu}
            className='absolute top-3 right-5 text-4xl'
            icon={faTimes}
            iconClassName='text-white'
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsTab;