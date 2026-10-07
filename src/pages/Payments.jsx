import WaitlistButton from '../components/WaitlistButton.jsx';
import RouteLink from '../components/RouteLink.jsx';
import { PageHeader } from './PageShared.jsx';

export default function Payments() {
  return (
    <div className="page payments-page">
      <section className="page-hero section-shell compact-hero payment-hero">
        <PageHeader eyebrow="YOUR NEXT CHAPTER STARTS HERE" title="Secure Your Early Access" description="The Croevo paid waitlist opens on 15 October 2026." />
      </section>
      <section className="payment-area section-shell">
        <div className="payment-card reveal">
          <div className="payment-card-top"><RouteLink to="/" className="payment-wordmark">CROEVO<span>®</span></RouteLink><span className="payment-status"><i/> EARLY ACCESS</span></div>
          <div className="payment-art" aria-hidden="true"><div className="payment-ring ring-one"/><div className="payment-ring ring-two"/><div className="payment-core">c<span>.</span></div><span className="payment-star star-one">✳</span><span className="payment-star star-two">✦</span></div>
          <div className="payment-card-copy"><span className="eyebrow">A PLACE AT THE BEGINNING</span><h2>Paid Early Access</h2><p>Details will be revealed when the waitlist opens.</p></div>
          <div className="payment-divider"/><div className="payment-date"><span>WAITLIST OPENS</span><strong>15 October 2026</strong></div>
          <WaitlistButton className="payment-button" unavailable="modal">Continue to Payment</WaitlistButton>
          <p className="payment-note">No payment is collected on this page. For more information, DM me or Adhinav.</p>
        </div>
        <div className="payment-side-note reveal"><span className="eyebrow">BE PART OF WHAT’S NEXT</span><p>One clear next step. The waitlist opens 15 October 2026.</p><div className="payment-side-line"/><span className="payment-side-number">01 <i>/</i> 03</span></div>
      </section>
      <div className="payment-launch-note section-shell reveal"><span className="launch-note-dot"/> Payment link will be available here at launch.</div>
    </div>
  );
}
