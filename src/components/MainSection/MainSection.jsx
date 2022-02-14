import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import List from 'components/generics/List';
import StartScreen from 'components/StartScreen/StartScreen';
import { getList } from './mainSection.utils';

const MainSection = () => {
  const params = useParams();
  const { data, isLoading } = useQuery(`list/${params.listUrl}`, getList);

  console.log(params);
  if (data) console.log(data.data);

  return (
    <div className='mt-5'>
      {/* <List component={ReactComponent} data={[]} label="dasd"/> */}
      <StartScreen />
      <List type='buy' />
      <List type='bought' />
      <List type='miss' />
    </div>
  );
};

export default MainSection;
