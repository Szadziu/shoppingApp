import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import ms from 'ms';
import List from 'components/generics/List';
import StartScreen from 'components/StartScreen/StartScreen';
import { getList } from './mainSection.utils';
import { data } from 'autoprefixer';
import ListItem from 'components/generics/ListItem';
import { axiosClient } from 'utils/axios';
import { AppStateContext } from 'contexts/AppState';
import { ListsStateContext } from 'contexts/ListsState';

// TODO: po zmianie listy zamykać drawer z menu pls
// DONE
// TODO: add error handling - screen to inform user that an error occured
// TODO: add refetch button to try again
// TODO: add some kind of loader indicator (spinner / skeleton) to make sure user is aware that data is being loaded


const timeBetweenRefetch = ms('30s');
const MainSection = () => {
  const {setIsSideMenuVisible} = useContext(AppStateContext)
  const {setCurrentListId} = useContext(ListsStateContext)
  const params = useParams();
  const url = `list/${params.listUrl}`;
  const { data, isLoading, isFetching, error, refetch } = useQuery(
    'getList',
    () => getList(url),
    {
      refetchInterval: timeBetweenRefetch,
    }
  );

  useEffect(() => {
  if(data){
    setIsSideMenuVisible(false)
    setCurrentListId(data.data.list._id)
    refetch();
  }
  }, [params]);
  
  if(isLoading || error) {
    return <h1 className="flex justify-center items-center relative h-10 w-32 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold tracking-wider bg-red-400 rounded text-white uppercase text-center">{`Error occured: ${error.message}`}</h1>
  }
  if(isFetching) return <h1 className="flex justify-center items-center relative h-10 w-32 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold tracking-wider bg-green-400 rounded text-white uppercase text-center">loading...</h1>
  // TODO: refactor if its possible (optional)

  const notesGroupedByType = data.data.list.notes.reduce(
    (acc, cur) => {
      const { isAvailable, isDiscarded } = cur;
      if (isAvailable) return { ...acc, ['To buy']: [...acc['To buy'], cur] };
      if (isDiscarded) return { ...acc, ['Bought']: [...acc['Bought'], cur] };
      else return { ...acc, ['Missing']: [...acc['Missing'], cur] };
    },
    { ['To buy']: [], ['Bought']: [], ['Missing']: [] }
  );

 

  // TODO: Add styling
  function renderLists() {
    return Object.entries(notesGroupedByType).map(([key, value]) => (
      <>
        <h3 className='font-bold text-xl bg-orange-500 text-center text-white py-1 border-orange-900 border-solid border-y-2 mb-2'>
          {key}
        </h3>
        <ul>{renderList(value)}</ul>
      </>
    ));
  }

  function renderList(notes) {
    // TODO: add styling
    return notes.map(
      ({ body, quantity, isAvailable, isDiscarded }) => (
        <ListItem
          name={body}
          quantity={quantity}
          toBuy={isAvailable}
          bought={isDiscarded}
        />
      ) 
    );
  }

  return (
    <div className='mt-5 bg-cyan-300'>

      {/* TODO: add proper styling and tag */}
      {data.data.list.name}
      {renderLists()}
    </div>
  );
};

export default MainSection;

//TODO: create context which contains currently selected list (holds information such as list id etc.)
