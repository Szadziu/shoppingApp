import {
  faCartArrowDown,
  faPlus,
  faReply,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppStateContext } from 'contexts/AppState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import Button from '../Button';
import { AnimatePresence, motion } from 'framer-motion';

//! Refactor plsssssssssssssssssssssssssssssssssssssssssssssssssssssssss
const ListItem = ({ bought, toBuy, name, quantity }) => {
  const ItemClassnames = cn('w-4/5', {
    ['line-through']: bought,
    ['text-red-500']: !toBuy,
  });

  return (
    <AnimatePresence>
      <motion.li
        className=' list-none flex justify-between items-center px-2 h-12'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <FontAwesomeIcon icon={faCartArrowDown} className='text-green-500' />
        <p className={ItemClassnames}>{name}</p>
        <FontAwesomeIcon icon={faReply} className='text-red-400' />
        <p>{quantity}</p>
        {toBuy && <Button icon={faPlus} />}
      </motion.li>
    </AnimatePresence>
  );
};

export default ListItem;
