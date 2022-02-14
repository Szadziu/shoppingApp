import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ShoppingList = ({ listUrl, listName }) => {
  return (
    <Link
      to={`/${listUrl}`}
      className='text-white text uppercase bg-amber-500 p-4 h-1/5 w-4/5 flex items-center justify-between rounded-lg'
    >
      {listName}
      <FontAwesomeIcon className='text-2xl' icon={faList} />
    </Link>
  );
};
export default ShoppingList;
