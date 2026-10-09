import RouteLink from './RouteLink.jsx';
import WaitlistButton from './WaitlistButton.jsx';

const headerNavigation = [
  ['/', 'Home'],
  ['/teams', 'Teams'],
  ['/benefits', 'Benefits'],
  ['/story', 'Our Story'],
  ['/login', 'Login'],
];

const footerNavigation = [
  ['/', 'Home'],
  ['/teams', 'Teams'],
  ['/benefits', 'Benefits'],
  ['/story', 'Our Story'],
  ['/payments', 'Payments'],
  ['/refund-policy', 'Refund Policy'],
  ['/login', 'Login'],
];

export function SiteHeader({ currentPath, menuOpen, setMenuOpen, scrolled }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <RouteLink to="/" className="brand" aria-label="Croevo home" onClick={closeMenu}>
          <span className="brand-icon">c<span>.</span></span><span className="brand-name">CROEVO</span>
        </RouteLink>
        <button className={`menu-toggle${menuOpen ? ' active' : ''}`} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
        <div className={`nav-links${menuOpen ? ' menu-open' : ''}`}>
          {headerNavigation.map(([path, label]) => (
            <RouteLink key={path} to={path} onClick={closeMenu} aria-current={currentPath === path ? 'page' : undefined}>{label}</RouteLink>
          ))}
          <WaitlistButton className="nav-cta" onClick={closeMenu}>Join Waitlist</WaitlistButton>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <RouteLink to="/" className="brand footer-brand"><span className="brand-icon">c<span>.</span></span><span className="brand-name">CROEVO</span></RouteLink>
        <p className="footer-launch">Launching 15 October 2026.</p>
        <div className="footer-links">
          {footerNavigation.map(([path, label]) => <RouteLink key={path} to={path}>{label}</RouteLink>)}
        </div>
        <p className="footer-contact">For more information, DM me or Adhinav.</p>
      </div>
      <div className="footer-bottom section-shell">
        <span>© 2026 CROEVO</span><span>MADE FOR WHAT’S NEXT <i>✳</i></span>
        <RouteLink to="/">BACK TO TOP ↑</RouteLink>
      </div>
    </footer>
  );
}
