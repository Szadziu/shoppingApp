import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ms from 'ms';
import List from 'components/generics/List';
import StartScreen from 'components/StartScreen/StartScreen';
import { getList } from './mainSection.utils';
import { data } from 'autoprefixer';
import ListItem from 'components/generics/ListItem';

const timeBetweenRefetch = ms('30s');
// TODO: po zmianie listy zamykać drawer z menu pls

const MainSection = () => {
  const params = useParams();
  const url = `list/${params.listUrl}`;

  const { data, isLoading, error, refetch } = useQuery(
    'getList',
    () => getList(url),
    {
      refetchInterval: timeBetweenRefetch,
    }
  );

  useEffect(() => {
    refetch();
  }, [params]);

  if (isLoading || error) {
    // TODO: add error handling - screen to inform user that an error occured
    // add refetch button to try again

    // TODO: add some kind of loader indicator (spinner / skeleton) to make sure user is aware that data is being loaded
    return <h1>Dupa blada </h1>;
  }

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
      // alternative solution
      // <Item {...note} />
    );
  }

  return (
    <div className='mt-5'>
      {/* <List component={ReactComponent} data={[]} label="dasd"/> */}

      {/* TODO: add proper styling and tag */}
      {data.data.list.name}
      {renderLists()}
    </div>
  );
};

export default MainSection;

//TODO: create context which contains currently selected list (holds information such as list id etc.)
