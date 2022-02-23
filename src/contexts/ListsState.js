import { useState, createContext } from "react";

export const ListsStateContext = createContext()

const ListsState = ({children}) => {

    const [currentListId, setCurrentListId] = useState('62112779cc1096f9a5518b9f');

 return (<ListsStateContext.Provider value={{currentListId, setCurrentListId}}>
{children}
 </ListsStateContext.Provider>)
}

export default ListsState