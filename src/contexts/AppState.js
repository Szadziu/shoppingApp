import { createContext, useState } from 'react';

export const AppStateContext = createContext();

const AppState = ({ children }) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [isSettingsMenuVisible, setIsSettingsMenuVisible] = useState(false);

  return (
    <AppStateContext.Provider
      value={{
        isSideMenuVisible,
        setIsSideMenuVisible,
        isSettingsMenuVisible,
        setIsSettingsMenuVisible,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppState;
