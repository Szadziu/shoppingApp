import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/generics/Button';
import { useState } from 'react';
const StartScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeStartScreen = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className=' flex flex-col gap-10 text-white text-2xl justify-center items-center bg-emerald-300 absolute top-0 left-0 right-0 bottom-0'>
        <p>Witaj w mShoper</p>
        <Button
          icon={faPlusCircle}
          iconClassName='text-6xl'
          onClick={closeStartScreen}
        />
      </div>
    )
  );
};

export default StartScreen;
