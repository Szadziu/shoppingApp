import { faList } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const ShoppingList = () => {
  return (
    <div className='text-white text uppercase bg-amber-500 p-4 h-1/5 w-4/5 flex items-center justify-between rounded-lg'>
      lista zakupow
      <Button className='' icon={faList} iconClassName='text-2xl' />
    </div>
  );
};
export default ShoppingList;
