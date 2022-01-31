import {
  faEraser,
  faShare,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import Option from 'components/generics/Option/Option';

const Options = () => {
  return (
    <div className='flex justify-around flex-wrap  h-5/6 w-full '>
      <Option name='remove bought items' icon={faEraser} />
      <Option name='share list' icon={faShare} />
      <Option
        name='remove list'
        icon={faTimesCircle}
        iconClassName='text-red-400'
      />
    </div>
  );
};

export default Options;
