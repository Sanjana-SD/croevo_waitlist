import { WAITLIST_PAYMENT_URL } from '../config.js';
import RouteLink from './RouteLink.jsx';

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M4 10h11M10 4l6 6-6 6" /></svg>;
}

export function hasPaymentUrl() {
  const url = WAITLIST_PAYMENT_URL.trim();
  return Boolean(url) && !url.includes('YOUR_PAYMENT_URL_HERE');
}

export default function WaitlistButton({ children = 'Join the Paid Waitlist', className = '', unavailable = 'route', onClick, disabled = false, ...props }) {
  const buttonClass = `button button-primary ${className} ${disabled ? 'button-disabled' : ''}`.trim();
  const content = <>{children}<Arrow /></>;

  if (disabled) {
    return (
      <button
        className={buttonClass}
        type="button"
        disabled={true}
        aria-disabled="true"
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }

  if (hasPaymentUrl()) {
    return <a className={buttonClass} href={WAITLIST_PAYMENT_URL} target="_blank" rel="noreferrer" onClick={onClick} {...props}>{content}</a>;
  }

  if (unavailable === 'modal') {
    return <button className={buttonClass} type="button" onClick={(event) => { onClick?.(event); window.dispatchEvent(new Event('croevo:waitlist')); }} {...props}>{content}</button>;
  }

  return <RouteLink className={buttonClass} to="/payments" onClick={onClick} {...props}>{content}</RouteLink>;
}
