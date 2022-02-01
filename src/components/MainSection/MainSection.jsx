import List from 'components/generics/List';
import StartScreen from 'components/StartScreen/StartScreen';

const MainSection = () => {
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
