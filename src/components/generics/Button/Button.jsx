import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children, icon, className, onClick, disabled }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button onClick={handleOnClick} disabled={disabled}>
      {children} {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
