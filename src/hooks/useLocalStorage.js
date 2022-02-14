const useLocalStorage = () => {
  const [localStorageState, setLocalStorageState] = useState({ userLists: [] });

  useEffect(() => {
    const currentLsState = setLocalStorageState(
      localStorage.getItem('shopper')
    );

    if (currentLsState) {
      setLocalStorageState(JSON.parse(currentLsState));
    }
  }, []);

  const updateLocalStorage = () => {
    localStorage.setItem('shopper', JSON.stringify(localStorageState));
  };

  const addUserList = (listId) => {
    setLocalStorageState((prev) => ({
      ...prev,
      userLists: [...prev.userLists, listId],
    }));
    updateLocalStorage();
  };

  const removeUserList = (listId) => {
    setLocalStorageState((prev) => ({
      ...prev,
      userLists: prev.userList.filter(({ id }) => listId !== id),
    }));
    updateLocalStorage();
  };

  return {
    addUserList,
    removeUserList,
    localStorageState,
  };
};
