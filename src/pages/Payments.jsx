import { useState } from 'react';
import WaitlistButton from '../components/WaitlistButton.jsx';
import RouteLink from '../components/RouteLink.jsx';
import { PageHeader } from './PageShared.jsx';

export default function Payments() {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedRefund, setAgreedRefund] = useState(false);
  const [acknowledgedConcept, setAcknowledgedConcept] = useState(false);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const allAccepted = agreedTerms && agreedRefund && acknowledgedConcept;

  const handleAttemptClick = (e) => {
    if (!allAccepted) {
      e.preventDefault();
      setValidationAttempted(true);
    }
  };

  return (
    <div className="page payments-page">
      <section className="page-hero section-shell compact-hero payment-hero">
        <PageHeader eyebrow="YOUR NEXT CHAPTER STARTS HERE" title="Secure Your Early Access" description="The Croevo paid waitlist opens on 15 October 2026." />
      </section>
      <section className="payment-area section-shell">
        <div className="payment-card reveal">
          <div className="payment-card-top">
            <RouteLink to="/" className="payment-wordmark">CROEVO<span>®</span></RouteLink>
            <span className="payment-status"><i/> EARLY ACCESS</span>
          </div>
          <div className="payment-art" aria-hidden="true">
            <div className="payment-ring ring-one"/>
            <div className="payment-ring ring-two"/>
            <div className="payment-core">c<span>.</span></div>
            <span className="payment-star star-one">✳</span>
            <span className="payment-star star-two">✦</span>
          </div>
          <div className="payment-card-copy">
            <span className="eyebrow">A PLACE AT THE BEGINNING</span>
            <h2>Paid Early Access</h2>
            <p>Details and checkout options will be available when the waitlist opens.</p>
          </div>

          <div className="payment-divider"/>

          <div className="payment-date">
            <span>WAITLIST OPENS</span>
            <strong>15 October 2026</strong>
          </div>

          {/* CHECKBOX AGREEMENTS SECTION */}
          <div className="payment-agreements" role="group" aria-labelledby="agreements-heading">
            <span id="agreements-heading" className="agreements-title">Required Agreements & Acknowledgments</span>
            
            <label className={`custom-checkbox-row ${agreedTerms ? 'is-checked' : ''}`}>
              <span className="checkbox-input-wrap">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={agreedTerms}
                  onChange={(e) => {
                    setAgreedTerms(e.target.checked);
                    if (validationAttempted) setValidationAttempted(false);
                  }}
                  className="sr-only"
                />
                <span className="custom-checkbox-box" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="check-icon">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
              <span className="checkbox-label-text">
                I have read and agree to the{' '}
                <button
                  type="button"
                  className="inline-policy-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTermsModalOpen(true);
                  }}
                >
                  Terms and Conditions
                </button>
                .
              </span>
            </label>

            <label className={`custom-checkbox-row ${agreedRefund ? 'is-checked' : ''}`}>
              <span className="checkbox-input-wrap">
                <input
                  type="checkbox"
                  id="agree-refund"
                  checked={agreedRefund}
                  onChange={(e) => {
                    setAgreedRefund(e.target.checked);
                    if (validationAttempted) setValidationAttempted(false);
                  }}
                  className="sr-only"
                />
                <span className="custom-checkbox-box" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="check-icon">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
              <span className="checkbox-label-text">
                I have read and agree to the{' '}
                <RouteLink
                  to="/refund-policy"
                  className="inline-policy-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Refund Policy
                </RouteLink>
                .
              </span>
            </label>

            <label className={`custom-checkbox-row ${acknowledgedConcept ? 'is-checked' : ''}`}>
              <span className="checkbox-input-wrap">
                <input
                  type="checkbox"
                  id="ack-concept"
                  checked={acknowledgedConcept}
                  onChange={(e) => {
                    setAcknowledgedConcept(e.target.checked);
                    if (validationAttempted) setValidationAttempted(false);
                  }}
                  className="sr-only"
                />
                <span className="custom-checkbox-box" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="check-icon">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </span>
              <span className="checkbox-label-text">
                I understand that CroevoAI is currently at the concept stage and have reviewed the information provided about the product.
              </span>
            </label>

            {/* Validation Feedback Message */}
            {!allAccepted && (
              <div className={`agreements-status-note ${validationAttempted ? 'is-error' : ''}`} role="alert" aria-live="polite">
                <span className="status-dot"/>
                <span>{validationAttempted ? 'Please check all three required boxes above to continue.' : 'All three acknowledgments must be checked to proceed.'}</span>
              </div>
            )}
            {allAccepted && (
              <div className="agreements-status-note is-ready" role="status">
                <span className="status-dot ready-dot"/>
                <span>All acknowledgments accepted. You can proceed to payment.</span>
              </div>
            )}
          </div>

          <div onClick={!allAccepted ? handleAttemptClick : undefined} className="payment-button-wrapper">
            <WaitlistButton
              className="payment-button"
              unavailable="modal"
              disabled={!allAccepted}
            >
              Continue to Payment
            </WaitlistButton>
          </div>

          <p className="payment-note">No payment is collected on this page. For more information, DM me or Adhinav.</p>
        </div>

        <div className="payment-side-note reveal">
          <span className="eyebrow">BE PART OF WHAT’S NEXT</span>
          <p>One clear next step. The waitlist opens 15 October 2026.</p>
          <div className="payment-side-line"/>
          <span className="payment-side-number">01 <i>/</i> 03</span>
        </div>
      </section>

      <div className="payment-launch-note section-shell reveal">
        <span className="launch-note-dot"/> Payment link will be available here at launch.
      </div>

      {/* Terms and Conditions Modal */}
      {termsModalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setTermsModalOpen(false); }}>
          <section className="waitlist-modal policy-modal" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title">
            <button className="modal-close" aria-label="Close dialog" onClick={() => setTermsModalOpen(false)}>×</button>
            <div className="modal-mark">c<span>.</span></div>
            <span className="eyebrow">CROEVO TERMS & CONDITIONS</span>
            <h2 id="terms-modal-title">Terms Overview</h2>
            <div className="policy-modal-body">
              <p>By registering for the Croevo paid waitlist or platform access, you acknowledge that Croevo is currently in active concept and development phase.</p>
              <p>All early-access memberships are subject to our verified access guidelines, community standards, and applicable <RouteLink to="/refund-policy" onClick={() => setTermsModalOpen(false)} className="inline-policy-link">Refund Policy</RouteLink>.</p>
              <p>For complete details or questions regarding terms, reach out directly to the Croevo founding team.</p>
            </div>
            <button className="button button-primary modal-done" onClick={() => setTermsModalOpen(false)}>I Understand</button>
          </section>
        </div>
      )}
    </div>
  );
}
