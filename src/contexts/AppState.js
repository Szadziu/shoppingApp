import { createContext, useState } from 'react';
import { useQuery } from 'react-query';
import { axiosClient } from 'utils/axios';
import { useParams } from 'react-router';
import { getList } from 'components/MainSection/mainSection.utils';

export const AppStateContext = createContext();

const AppState = ({ children }) => {

  // czy tak mam robic? srednie podejscie, raczej
  // const params = useParams();
  // const url = `list/${params.listUrl}`;
  // const {isFetching, data, error, refetch} = useQuery("getList", ()=> getList(url), {refetchInterval: 5000})


  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [isSettingsMenuVisible, setIsSettingsMenuVisible] = useState(false);

  const [listToBuy, setListToBuy] = useState([]);
  const [listOfBoughts, setListOfBoughts] = useState([]);
  const [listOfMiss, setListOfMiss] = useState([]);

  const [currentItemValue, setCurrentItemValue] = useState('');

  const createNote = (idList) => {
    return axiosClient.post(`note/create/${idList}`, {
        data: {
          body: currentItemValue,
        },
      })
    ;
  };

  const editNote = (noteId) => {
    console.log(noteId);
    return axiosClient.post(`note/edit/${noteId}`, {
      data: {
        isDiscarded: true,
        quantity: 2,
      },
    })
  }
  const deleteNote = (noteId) => {
    console.log(`Note id ${noteId} was deleted`);
    return axiosClient.post(`note/delete/${noteId}`);
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
        editNote,
        deleteNote,

        currentItemValue,
        setCurrentItemValue,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
