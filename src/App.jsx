import { useEffect, useState } from 'react';
import { useCurrentPath } from './components/RouteLink.jsx';
import { SiteFooter, SiteHeader } from './components/SiteChrome.jsx';
import WaitlistButton from './components/WaitlistButton.jsx';
import Benefits from './pages/Benefits.jsx';
import NotFound from './pages/NotFound.jsx';
import Payments from './pages/Payments.jsx';
import Story from './pages/Story.jsx';
import Teams from './pages/Teams.jsx';

const launchDate = new Date(2026, 9, 15, 0, 0, 0);
const faqItems = [
  ['When does the paid waitlist open?', 'The paid waitlist opens on 15 October 2026.'],
  ['Is the waitlist paid?', 'Yes. Croevo will be launching a paid waitlist.'],
  ['What do I get by joining?', 'Early access and launch-related benefits. More details will be announced closer to launch.'],
  ['How can I get more information?', 'For more information, DM me or Adhinav.'],
  ['Where can I join?', 'The Join Waitlist button will take you to the official waitlist/payment flow once it is available.'],
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M4 10h11M10 4l6 6-6 6" /></svg>;
}

function ProductPreview() {
  return (
    <div className="preview-wrap" aria-label="Abstract Croevo product preview">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="preview-glow" />
      <div className="product-window">
        <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>croevo / experience</span><span className="window-status"><b /> IN DEVELOPMENT</span></div>
        <div className="window-content">
          <aside className="mock-sidebar"><div className="mock-mark">c<span>.</span></div><div className="side-lines"><i className="active" /><i /><i /><i /></div><div className="side-bottom"><i /></div></aside>
          <div className="mock-main">
            <div className="mock-greeting"><div><small>YOUR NEXT CHAPTER</small><h3>Welcome to what’s next.</h3></div><span className="avatar">C</span></div>
            <div className="mock-card hero-card"><div className="card-copy"><small>THE CROEVO EXPERIENCE</small><strong>Ideas, meet<br /><em>possibility.</em></strong><span className="tiny-pill">A new beginning</span></div><div className="abstract-art"><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-core">c.</div></div></div>
            <div className="mock-bottom-cards"><div className="mock-card mini-card"><span className="mini-icon">✳</span><div><small>MADE FOR</small><strong>Curious minds</strong></div><span className="mini-arrow">↗</span></div><div className="mock-card mini-card"><span className="mini-icon mini-icon-blue">◌</span><div><small>ON THE HORIZON</small><strong>Something new</strong></div><span className="mini-arrow">↗</span></div></div>
            <div className="mock-progress"><span>THE JOURNEY SO FAR</span><div className="progress-track"><i /></div><b>01 <small>/ 03</small></b></div>
          </div>
        </div>
      </div>
      <div className="floating-note note-top"><span className="note-spark">✳</span><span><small>MADE TO MOVE YOU</small><b>A fresh perspective</b></span></div>
      <div className="floating-note note-bottom"><span className="note-dot" /><span><small>LAUNCHING</small><b>15 October 2026</b></span></div>
    </div>
  );
}

function App() {
  const currentPath = useCurrentPath();
  const [remaining, setRemaining] = useState(() => Math.max(0, launchDate.getTime() - Date.now()));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, launchDate.getTime() - Date.now())), 1000);
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onWaitlist = () => setModalOpen(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('croevo:waitlist', onWaitlist);
    return () => { window.clearInterval(timer); window.removeEventListener('scroll', onScroll); window.removeEventListener('croevo:waitlist', onWaitlist); };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [currentPath]);

  useEffect(() => {
    if (!modalOpen) return undefined;
    const onKeyDown = (event) => { if (event.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.classList.remove('modal-open'); };
  }, [modalOpen]);

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  return (
    <>
      <SiteHeader currentPath={currentPath} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />

      <main className="route-content" key={currentPath}>
        {currentPath === '/' ? <>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="announcement"><span className="announcement-pulse"/> PAID WAITLIST OPENS <i/> 15 OCTOBER 2026</div>
            <p className="eyebrow hero-kicker">A NEW EXPERIENCE IS ON THE HORIZON</p>
            <h1>Something new<br />is <span>coming.</span></h1>
            <p className="hero-description">Croevo is opening its paid waitlist on 15 October. Be among the first to experience what’s next.</p>
            <div className="hero-actions"><WaitlistButton /><a href="#why" className="button button-secondary">Learn More <span className="down-arrow">↓</span></a></div>
            <div className="hero-footnote"><span className="footnote-line"/> Limited early-access spots.</div>
          </div>
          <ProductPreview />
          <a className="scroll-cue" href="#countdown"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="countdown-section" id="countdown">
          <div className="countdown-inner reveal">
            {remaining > 0 ? <>
              <div className="countdown-title"><span className="eyebrow">THE NEXT CHAPTER STARTS SOON</span><h2>PAID WAITLIST <span>OPENS IN</span></h2></div>
              <div className="countdown-clock" aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until the waitlist opens`}>
                {[['Days', days], ['Hours', hours], ['Minutes', minutes], ['Seconds', seconds]].map(([label, value]) => <div className="time-unit" key={label}><strong key={`${label}-${value}`}>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}
              </div>
            </> : <div className="countdown-open"><div><span className="eyebrow">THE MOMENT IS HERE</span><h2>THE WAITLIST IS <span>NOW OPEN</span></h2></div><WaitlistButton>Join the Waitlist</WaitlistButton></div>}
          </div>
        </section>

        <section className="why section-shell section-pad" id="why">
          <div className="section-heading reveal"><span className="eyebrow">A PLACE AT THE BEGINNING</span><h2>Why join <span>early?</span></h2><p>Be part of Croevo from the very start.</p></div>
          <div className="feature-grid">
            {[
              ['01', 'Early Access', 'Get access before the wider launch.', '↗'],
              ['02', 'Founding Access', 'Secure your place among the earliest Croevo users.', '✳'],
              ['03', 'Shape the Product', 'Early users can help influence what Croevo becomes.', '⌁'],
              ['04', 'Launch Benefits', 'Get access to launch-specific benefits.', '◈'],
            ].map(([number, title, copy, icon], index) => <article className="feature-card reveal" style={{ '--delay': `${index * 90}ms` }} key={number}><div className="feature-top"><span>{number}</span><b>{icon}</b></div><h3>{title}</h3><p>{copy}</p><div className="feature-rule"/></article>)}
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="experience-inner section-shell">
            <div className="experience-copy reveal"><span className="eyebrow">A FIRST LOOK AT THE FEELING</span><h2>Built for<br />what’s <span>next.</span></h2><p>Croevo is being built to create a smarter, simpler and more meaningful product experience.</p><a href="#how" className="text-link">Discover the journey <Arrow /></a></div>
            <div className="experience-visual reveal"><div className="experience-backlight"/><div className="experience-tile tile-large"><span className="tile-label">A DIFFERENT KIND OF EXPERIENCE</span><div className="tile-orb"><i/><i/><i/></div><strong>Make room<br />for <em>what’s next.</em></strong><span className="tile-bottom"><span className="tiny-dot"/> CROEVO / 2026</span></div><div className="experience-tile tile-small"><span className="tile-small-icon">✳</span><small>BUILT AROUND</small><strong>New possibilities</strong><span className="tile-small-arrow">↗</span></div><div className="experience-tile tile-tag">A new chapter<span>01 — 03</span></div></div>
          </div>
        </section>

        <section className="how-section section-shell section-pad" id="how">
          <div className="section-heading reveal"><span className="eyebrow">THREE STEPS INTO WHAT’S NEXT</span><h2>How it <span>works.</span></h2><p>Your way into Croevo starts here.</p></div>
          <div className="steps-grid">
            {[
              ['01', 'Join the Waitlist', 'Reserve your place when the paid waitlist opens.'],
              ['02', 'Get Early Access', 'Be among the first users to experience Croevo.'],
              ['03', 'Experience Croevo', 'Get started as we move toward launch.'],
            ].map(([number, title, copy], index) => <article className="step-card reveal" style={{ '--delay': `${index * 100}ms` }} key={number}><div className="step-number">{number}<span> / 03</span></div><div className="step-connector"><i/></div><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="launch-band">
          <div className="launch-grid"/><div className="launch-orb"/>
          <div className="launch-content reveal"><span className="eyebrow"><i/> THE WAITLIST OPENS</span><h2>15 <span>OCTOBER</span><br /><em>2026</em></h2><p>Ready to be early?</p><WaitlistButton /></div>
          <div className="launch-side-note">MARK YOUR MOMENT <span>— 01 / 03</span></div>
        </section>

        <section className="faq-section section-shell section-pad" id="faq">
          <div className="faq-intro reveal"><span className="eyebrow">GOOD TO KNOW</span><h2>A few things,<br /><span>answered.</span></h2><p>Something else on your mind? For more information, DM me or Adhinav.</p><a href="#contact" className="text-link">Get in touch <Arrow /></a></div>
          <div className="faq-list reveal">{faqItems.map(([question, answer], index) => <details className="faq-item" key={question} open={false}><summary><span className="faq-index">0{index + 1}</span><span>{question}</span><b className="faq-plus"/></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div>
        </section>

        <section className="final-cta section-shell reveal" id="contact">
          <div className="final-orbit"/><div className="final-content"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Be <span>early.</span></h2><p>15 October. The waitlist opens.</p><WaitlistButton /><small>For more information, DM me or Adhinav.</small></div>
        </section>
        </> : currentPath === '/teams' ? <Teams />
          : currentPath === '/benefits' ? <Benefits />
            : currentPath === '/story' ? <Story />
              : currentPath === '/payments' ? <Payments />
                : <NotFound />}
      </main>

      <SiteFooter />

      {modalOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}><section className="waitlist-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" aria-label="Close dialog" onClick={() => setModalOpen(false)}>×</button><div className="modal-mark">c<span>.</span></div><span className="eyebrow">A LITTLE MORE PATIENCE</span><h2 id="modal-title">Payment opens<br /><span>15 October 2026.</span></h2><p>Your payment link will be available here at launch.</p><p>For more information, DM me or Adhinav.</p><button className="button button-secondary modal-done" onClick={() => setModalOpen(false)}>Got it</button></section></div>}
    </>
  );
}

export default App;
