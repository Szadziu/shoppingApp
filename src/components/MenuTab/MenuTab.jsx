import { useContext, useEffect } from 'react';
import { useMutation } from 'react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/generics/Button';
import Title from 'components/generics/Title';
import { AppStateContext } from 'contexts/AppState';
import ShoppingList from 'components/generics/ShoppingList';
import Footer from './Footer/Footer';
import { useClickAway } from 'hooks/useClickAway';
import { axiosClient } from 'utils/axios';

function getLists(ids) {
  return axiosClient.post('list/getMany', { ids });
}

const MenuTab = () => {
  const { isSideMenuVisible, setIsSideMenuVisible } =
    useContext(AppStateContext);
  const { data, mutate } = useMutation(getLists);
  const ref = useClickAway(handleCloseMenu, isSideMenuVisible);

  useEffect(() => {
    mutate([
      '61f194c051f26dafd5f2b3b9',
      '61fb03c4d88df350a0572bfd',
      '620a76415b043f74ca33693a',
    ]);
  }, []);

  function handleCloseMenu() {
    setIsSideMenuVisible(false);
  }

  return (
    <AnimatePresence>
      {isSideMenuVisible && (
        <motion.div
          ref={ref}
          className='flex flex-col h-screen w-4/6 absolute z-10 bg-gray-800 top-0 left-0 shadow-2xl rounded-r-lg'
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.5 }}
          exit={{ x: '-100%', opacity: 0 }}
        >
          <Button
            icon={faTimes}
            className='absolute top-3 right-5 text-4xl'
            iconClassName='text-white'
            onClick={handleCloseMenu}
          />
          <Title className='text-white text-5xl mt-16 ml-2'>mShoper</Title>
          {/* There will be a render of shopping lists */}
          <div className='flex flex-wrap justify-center gap-5 h-full my-5 overflow-scroll'>
            {data.data.map(({ name, listUrl }) => (
              <ShoppingList listUrl={listUrl} listName={name} />
            ))}
          </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuTab;
