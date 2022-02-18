import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  children,
  icon,
  className,
  iconClassName,
  onClick,
  disabled,
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick(e);
  };
  // TODO: change styles (fixed position)
  return (
    <button onClick={handleOnClick} disabled={disabled} className={className}>
      {children}
      {icon && <FontAwesomeIcon icon={icon} className={iconClassName} />}
    </button>
  );
};

export default Button;
