import { useRef, useEffect } from 'react';

const useClickAway = (onClickOutside, isEnabled) => {
  const ref = useRef(null);

  function checkForClickOutside(e) {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }

    onClickOutside(e);
  }

  function checkForEscape(e) {
    if (e.key === 'Escape') {
      onClickOutside(e);
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', checkForClickOutside);
    window.addEventListener('keydown', checkForEscape);

    return (
      () => {
        window.removeEventListener('mousedown', checkForClickOutside);
        window.removeEventListener('keydown', checkForEscape);
      },
      [isEnabled]
    );
  });

  return ref;
};

export { useClickAway };
