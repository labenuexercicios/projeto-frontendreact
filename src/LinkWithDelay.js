import { Link } from 'react-router-dom';

export function LinkWithDelay({ to, delay, children }) {
  const handleClick = (event) => {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = to;
    }, delay);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default LinkWithDelay;