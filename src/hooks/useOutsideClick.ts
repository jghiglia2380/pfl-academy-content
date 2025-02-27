import { useEffect, RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>, 
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        callback(); // Call the callback if the click is outside the ref element
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
