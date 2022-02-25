import { createContext, useState } from 'react';
import { axiosClient } from 'utils/axios';

export const AppStateContext = createContext();

const AppState = ({ children }) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [isSettingsMenuVisible, setIsSettingsMenuVisible] = useState(false);

  const [listToBuy, setListToBuy] = useState([]);
  const [listOfBoughts, setListOfBoughts] = useState([]);
  const [listOfMiss, setListOfMiss] = useState([]);

  const [currentItemValue, setCurrentItemValue] = useState('') 

  const createNote = (idList) => {
    return axiosClient.post(`note/create/${idList}`, {
        data: {
          body: currentItemValue,
        },
      })
    ;
  };

  const modifyNote = (idList) => {
    return axiosClient.post(`note/create/${idList}`, {
      data: {
        body: currentItemValue,
        isDiscarded: true,
      },
    })
  }

  return (
    <AppStateContext.Provider
      value={{
        isSideMenuVisible,
        setIsSideMenuVisible,
        isSettingsMenuVisible,
        setIsSettingsMenuVisible,

        listToBuy,
        setListToBuy,
        listOfBoughts,
        setListOfBoughts,
        listOfMiss,
        setListOfMiss,

        createNote,
        modifyNote,

        currentItemValue,
        setCurrentItemValue,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
