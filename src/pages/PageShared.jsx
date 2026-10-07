import RouteLink from '../components/RouteLink.jsx';
import WaitlistButton from '../components/WaitlistButton.jsx';

export function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="page-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}

export function PageCta({ eyebrow = 'YOUR NEXT CHAPTER STARTS HERE', title = <>Be <span>early.</span></>, description = 'The Croevo paid waitlist opens 15 October 2026.', secondary }) {
  return (
    <section className="page-cta section-shell reveal">
      <div className="page-cta-orbit" />
      <div className="page-cta-content"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p><div className="page-cta-actions"><WaitlistButton>Join the Paid Waitlist</WaitlistButton>{secondary && <RouteLink className="button button-secondary" to={secondary.to}>{secondary.label}<span aria-hidden="true">↗</span></RouteLink>}</div></div>
    </section>
  );
}

export function TextLink({ to, children }) {
  return <RouteLink className="text-link" to={to}>{children}<span aria-hidden="true">↗</span></RouteLink>;
}
