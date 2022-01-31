import Button from '../Button';

const Option = ({ name, icon, iconClassName }) => {
  return (
    <div className='flex justify-between items-center text-white text-md w-full  px-2 uppercase'>
      {name}
      <Button icon={icon} className='text-xl' iconClassName={iconClassName} />
    </div>
  );
};

export default Option;
