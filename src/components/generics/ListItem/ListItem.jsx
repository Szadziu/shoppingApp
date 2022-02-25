import {
  faCartArrowDown,
  faPlus,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppStateContext } from "contexts/AppState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { ListsStateContext } from "contexts/ListsState";

//! Refactor pls

const ListItem = ({ _id, body, isDiscarded, isAvailable }) => {
  const { modifyNote } = useContext(AppStateContext);
  const { currentListId } = useContext(ListsStateContext);

  const productClassname = cn("w-4/5", {
    ["line-through"]: isDiscarded,
    ["text-red-500"]: !isAvailable,
  });
  return (
    <AnimatePresence>
      <motion.li
        className=" list-none flex justify-between items-center px-2 h-12"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        key={_id}
      >
        <FontAwesomeIcon
          icon={faCartArrowDown}
          className="text-green-500 cursor-pointer"
          onClick={() => modifyNote(currentListId)}
        />
        <p className={productClassname}>{body}</p>
        <FontAwesomeIcon icon={faReply} className="text-red-400" />
        <Button icon={faPlus} />
      </motion.li>
    </AnimatePresence>
  );
};

// const ListItem = ({ bought, toBuy, name, quantity }) => {
//   const ItemClassnames = cn('w-4/5', {
//     ['line-through']: bought,
//     ['text-red-500']: !toBuy,
//   });

//   return (
//     <AnimatePresence>
//       <motion.li
//         className=' list-none flex justify-between items-center px-2 h-12'
//         initial={{ x: '-100vw' }}
//         animate={{ x: 0 }}
//         transition={{ type: 'spring', stiffness: 200 }}
//       >
//         <FontAwesomeIcon icon={faCartArrowDown} className='text-green-500' />
//         <p className={ItemClassnames}>{name}</p>
//         <FontAwesomeIcon icon={faReply} className='text-red-400' />
//         <p>{quantity}</p>
//         {toBuy && <Button icon={faPlus} />}
//       </motion.li>
//     </AnimatePresence>
//   );
// };
export default ListItem;
