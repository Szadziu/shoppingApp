import { createContext, useState } from 'react';

export const AppStateContext = createContext();

const AppState = ({ children }) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [isSettingsMenuVisible, setIsSettingsMenuVisible] = useState(false);
  const [searcherValue, setSearcherValue] = useState('');

  const [listToBuy, setListToBuy] = useState([]);
  const [listOfBoughts, setListOfBoughts] = useState([]);
  const [listOfMiss, setListOfMiss] = useState([]);

  return (
    <AppStateContext.Provider
      value={{
        isSideMenuVisible,
        setIsSideMenuVisible,
        isSettingsMenuVisible,
        setIsSettingsMenuVisible,

        searcherValue,
        setSearcherValue,

        listToBuy,
        setListToBuy,
        listOfBoughts,
        setListOfBoughts,
        listOfMiss,
        setListOfMiss,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
