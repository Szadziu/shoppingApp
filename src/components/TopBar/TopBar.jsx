import cn from 'classnames';

const TopBar = (isVisible) => {
  // const searchBarClassnames = cn(
  //     "flex flex-wrap bg-red400",
  //     { [isVisible]: "opacity-0"}
  // )

  // const a = {
  //     ...(isVisible ? {name: "Alicja"}: {}),
  //     ...(isVisible && coś innego ? {age: 30}: {}),
  // }

  return (
    <div className='flex flex-wrap bg-amber-500 w-screen h-screen'>
      <button></button>
      <input type='text' />
      <button></button>
    </div>
  );
};

export default TopBar;
