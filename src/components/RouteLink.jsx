import { useEffect, useState } from 'react';

export function navigateTo(path) {
  if (window.location.pathname !== path) window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useCurrentPath() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, '') || '/');

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname.replace(/\/$/, '') || '/');
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  return path;
}

export default function RouteLink({ to, onClick, children, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigateTo(to);
  };

  return <a href={to} onClick={handleClick} {...props}>{children}</a>;
}
