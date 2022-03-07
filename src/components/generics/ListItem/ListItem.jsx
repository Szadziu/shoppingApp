import {
  faCartArrowDown,
  faPlus,
  faRemoveFormat,
  faReply,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { axiosClient } from "utils/axios";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AppStateContext } from "contexts/AppState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { ListsStateContext } from "contexts/ListsState";

//! Refactor pls

const ListItem = ({ _id, body, isDiscarded, isAvailable, quantity }) => {
  const { editNote, deleteNote } = useContext(AppStateContext);
  const { currentListId } = useContext(ListsStateContext);
  const { mutate } = useMutation(() => {
    axiosClient.post(`/note/edit/621664b95f784eb3d803c2e8`);
  });
  const { invalidateQueries } = useQueryClient();

  const test = () =>
    mutate(
      { quantity: 1000 },
      {
        onSuccess: () => {
          invalidateQueries("getList");
        },
      }
    );

  console.log(_id);

  const productClassname = cn("w-4/5", {
    ["line-through"]: isDiscarded,
    ["text-red-500"]: !isAvailable,
  });
  return (
    <AnimatePresence>
      <motion.li
        className=" list-none flex justify-between gap-2 items-center px-2 h-12"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        key={_id}
      >
        <FontAwesomeIcon
          icon={faCartArrowDown}
          className="text-green-500 cursor-pointer"
          // onClick={() => editNote(_id)}
          onClick={test}
        />
        <p className={productClassname}>{body}</p>
        <FontAwesomeIcon icon={faReply} className="text-orange-400" />
        <Button icon={faPlus} />
        <p>{quantity}</p>
        <Button
          icon={faTimes}
          iconClassName="text-red-400"
          onClick={() => deleteNote(_id)}
        />
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
