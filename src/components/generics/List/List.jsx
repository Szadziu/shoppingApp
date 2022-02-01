import { AppStateContext } from 'contexts/AppState';
import { useContext } from 'react';
import Item from '../Item';

const List = ({ type }) => {
  const { listToBuy, listOfMiss, listOfBoughts } = useContext(AppStateContext);

  const list = {
    name: 'unknown',
    type: [],
    miss: false,
    bought: false,
  };

  switch (type) {
    case 'buy':
      list.name = 'To buy';
      list.type = listToBuy;
      break;
    case 'bought':
      list.name = 'Bought';
      list.type = listOfBoughts;
      list.bought = true;
      break;
    case 'miss':
      list.name = 'Miss items';
      list.type = listOfMiss;
      list.miss = true;
      break;
  }

  const renderList = () => {
    return list.type.map((item) => (
      <Item
        id={item.id}
        miss={list.miss}
        bought={list.bought}
        name={item.name}
        // {...item}
      />
    ));
  };

  return (
    <div className='w-full flex flex-col gap-2'>
      <label className='bg-gray-600 text-white pl-2'>{list.name}</label>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;

// const NoteSchema = new Schema(
//   {
//     listId: {
//       type: Schema.Types.ObjectId,
//       ref: "list",
//     },
//     quantity: {
//       type: String,
//       required: true,
//       default: 1,
//       min: 1,
//     },
//     isAvailable: {
//       type: Boolean,
//       required: true,
//       default: true,
//     },
//     isDiscarded: {
//       type: Boolean,
//       default: false,
//       required: true,
//     },
//     body: {
//       type: String,
//       required: true,
//       minlength: 1,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const ListSchema = new Schema<List>(
//   {
//     notes: {
//       type: [Types.ObjectId],
//       ref: "note",
//       default: [],
//     },
//     name: {
//       type: String,
//       required: true,
//       lowercase: true,
//     },
//     listUrl: {
//       type: String,
//       default: uuidv4(),
//     },
//   },
//   { timestamps: true } createdAt: data, updatedAt: data
// );
