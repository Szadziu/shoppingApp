import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/generics/Button';
import { addList } from 'components/MainSection/mainSection.utils';
import { useState } from 'react';
const StartScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [inputNameListValue, setInputNameListValue] = useState('');

  const closeStartScreen = () => {
    setIsVisible(false);
  };

  const createNewList = () => {
    addList(inputNameListValue);
    setInputNameListValue('');
    closeStartScreen();
  };

  const handleInputNameList = (e) => {
    setInputNameListValue(e.target.value);
  };

  return (
    isVisible && (
      <div className=' flex flex-col gap-10 text-white text-2xl justify-center items-center bg-emerald-300 absolute top-0 left-0 right-0 bottom-0'>
        <p>Witaj w mShoper</p>
        <form>
          <input
            style={{ color: 'black' }}
            type='text'
            value={inputNameListValue}
            onChange={handleInputNameList}
          />
        </form>

        {inputNameListValue ? (
          <Button
            icon={faPlusCircle}
            iconClassName='text-6xl text-lime-700'
            onClick={createNewList}
          />
        ) : (
          <Button
            icon={faTimesCircle}
            iconClassName='text-6xl text-red-400'
            onClick={closeStartScreen}
          />
        )}
      </div>
    )
  );
};

export default StartScreen;
