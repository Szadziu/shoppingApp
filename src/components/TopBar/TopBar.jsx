import cn from "classnames";
import { useContext } from "react";
import { faBars, faCog, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "components/generics/Button";
import { AppStateContext } from "contexts/AppState";
import { ListsStateContext } from "contexts/ListsState";
import { useParams } from "react-router";
import { getList } from "components/MainSection/mainSection.utils";

const TopBar = (isVisible) => {
  const {
    setIsSideMenuVisible,
    setIsSettingsMenuVisible,
    currentItemValue,
    setCurrentItemValue,
    createNote,
  } = useContext(AppStateContext);

  const params = useParams();
  const url = `list/${params.listUrl}`;

  const { currentListId } = useContext(ListsStateContext);
  console.log(currentListId);

  const addButtonClassnames = cn("bg-white rounded-full", {
    ["grayscale"]: !currentItemValue,
  });

  const addItemToBuyList = () => {
    createNote(currentListId);
    setCurrentItemValue("");
    getList(url);
  };

  function openSideMenu() {
    setIsSideMenuVisible(true);
    setIsSettingsMenuVisible(false);
  }
  function openSettingsMenu() {
    setIsSettingsMenuVisible(true);
    setIsSideMenuVisible(false);
  }
  function handleSearcher(e) {
    setCurrentItemValue(e.target.value);
  }

  return (
    <>
      <div className="flex justify-between items-center shadow shadow-stone-500 bg-amber-500 w-full h-1/10 px-5">
        <Button icon={faBars} className="text-4xl" onClick={openSideMenu} />
        <input type="text" value={currentItemValue} onChange={handleSearcher} />
        <Button
          icon={faPlusCircle}
          className={addButtonClassnames}
          iconClassName="text-4xl text-green-400 border-4 border-white rounded-full"
          onClick={addItemToBuyList}
          disabled={!currentItemValue}
        />
        <Button icon={faCog} className="text-4xl" onClick={openSettingsMenu} />
      </div>
    </>
  );
};

export default TopBar;
