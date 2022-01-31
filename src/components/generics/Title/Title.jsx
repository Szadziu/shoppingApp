import cn from 'classnames';

const Title = ({ as, children, className, ...restProps }) => {
  const Component = /h[1-6]/gi.test(as) ? as : 'h1';
  const titleClassNames = cn(className, 'text-2xl');

  return (
    <>
      <Component className={titleClassNames} {...restProps}>
        {children}
        <hr className='mt-4' />
      </Component>
    </>
  );
};

export default Title;
