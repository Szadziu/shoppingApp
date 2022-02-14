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

const Item = ({ bought, miss, name, id }) => {
  const ItemClassnames = cn('w-4/5', {
    ['line-through']: bought,
    ['text-red-500']: miss,
  });

  const {
    listToBuy,
    setListToBuy,
    listOfBoughts,
    setListOfBoughts,
    listOfMiss,
    setListOfMiss,
  } = useContext(AppStateContext);

  // const managementOfProducts = () => {
  //   const copy = listToBuy;
  //   setListToBuy(
  //     copy.filter((item) => {
  //       moveItem(item);
  //       removeItem(item);
  //       return id !== item.id;
  //     })
  //   );
  // };

  // const moveItem = (item) => {
  //   setListOfMiss([...listOfMiss, item]);
  //   item.miss = true;
  // };

  // const removeItem = (item) => {
  //   setListOfBoughts([...listOfBoughts, item]);
  //   item.bought = true;
  // };

  const removeItemFromBuyList = () => {
    const copy = listToBuy;
    setListToBuy(
      copy.filter((item) => {
        setListOfBoughts([...listOfBoughts, item]);
        item.bought = true;
        return id !== item.id;
      })
    );
  };
  const moveItemToMissList = () => {
    const copy = listToBuy;
    setListToBuy(
      copy.filter((item) => {
        setListOfMiss([...listOfMiss, item]);
        item.miss = true;
        return id !== item.id;
      })
    );
  };

  return (
    <AnimatePresence>
      <motion.li
        className=' list-none flex justify-between items-center px-2 h-12'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <FontAwesomeIcon
          icon={faCartArrowDown}
          className='text-green-500'
          onClick={removeItemFromBuyList}
        />
        <p className={ItemClassnames}>{name}</p>
        <FontAwesomeIcon
          icon={faReply}
          className='text-red-400'
          onClick={moveItemToMissList}
        />
        <p>1</p>
        <Button icon={faPlus} />
      </motion.li>
    </AnimatePresence>
  );
};

export default Item;
