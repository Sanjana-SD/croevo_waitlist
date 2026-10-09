import RouteLink from '../components/RouteLink.jsx';
import WaitlistButton from '../components/WaitlistButton.jsx';
import { PageHeader } from './PageShared.jsx';

/**
 * =======================================================================
 * REFUND POLICY CONFIGURATION
 * =======================================================================
 * 
 * Site owners: Replace the placeholder contact email below with your
 * official support email before publishing for live transactions.
 */
export const SUPPORT_EMAIL = "support@croevo.ai"; // [EDITABLE PLACEHOLDER: Update with your official support email]

export default function RefundPolicy() {
  return (
    <div className="page policy-page">
      <section className="page-hero section-shell compact-hero policy-hero">
        <PageHeader
          eyebrow="LEGAL & TRANSPARENCY"
          title="Refund Policy"
          description="This Refund Policy explains the refund terms applicable to payments made for CroevoAI waitlist access."
        />
      </section>

      <section className="policy-content-section section-shell">
        <div className="policy-card reveal">
          <div className="policy-card-header">
            <span className="policy-version-badge">
              <span className="status-dot ready-dot" /> CURRENT VERSION: 2026.1
            </span>
            <span className="policy-effective-date">Last Updated: Concept Phase</span>
          </div>

          <article className="policy-article">
            <section className="policy-section">
              <div className="policy-num">01</div>
              <div className="policy-body">
                <h2>Overview</h2>
                <p>
                  CroevoAI offers early access opportunities through our waitlist program. Users are encouraged
                  to carefully review all applicable payment terms, concept descriptions, and this Refund Policy
                  prior to initiating any checkout or payment transaction.
                </p>
              </div>
            </section>

            <section className="policy-section">
              <div className="policy-num">02</div>
              <div className="policy-body">
                <h2>Refund Eligibility</h2>
                <p>
                  Refund eligibility for waitlist reservations and purchases is determined based on the specific terms
                  presented at the point of sale, the transaction status with the designated payment processor, and
                  applicable statutory consumer protection regulations.
                </p>
                <p>
                  Because terms may vary based on promotional offerings or access tiers, the exact terms disclosed
                  during checkout govern individual transactions.
                </p>
              </div>
            </section>

            <section className="policy-section">
              <div className="policy-num">03</div>
              <div className="policy-body">
                <h2>Refund Requests</h2>
                <p>
                  If you wish to submit a refund inquiry or request, please contact the CroevoAI team directly with
                  your transaction details, registered email address, and order reference.
                </p>
                <div className="policy-callout">
                  <strong>How to Reach Us:</strong>
                  <p>
                    Contact official support at{' '}
                    <code className="email-placeholder">{SUPPORT_EMAIL}</code> or send a direct message to Koyilada Prem
                    or Abhinav via our community channels.
                  </p>
                </div>
              </div>
            </section>

            <section className="policy-section">
              <div className="policy-num">04</div>
              <div className="policy-body">
                <h2>Processing and Timelines</h2>
                <p>
                  Approved refund requests will be processed through the original payment method utilized at the time
                  of purchase in accordance with the standard operating procedures and settlement windows of the payment
                  gateway provider.
                </p>
                <p>
                  Actual posting timelines to your bank account or credit card statement depend on your financial
                  institution's standard processing cycles.
                </p>
              </div>
            </section>

            <section className="policy-section">
              <div className="policy-num">05</div>
              <div className="policy-body">
                <h2>Waitlist and Product Changes</h2>
                <p>
                  CroevoAI is currently in an active concept and developmental stage. Roadmaps, feature sets, and
                  architectural specifications are subject to ongoing refinement and iteration as we build in the open.
                </p>
                <p>
                  Participation in the waitlist secures your early place in line and associated early-access benefits
                  as officially communicated by CroevoAI, without implying guarantees on specific unconfirmed launch dates
                  or future unannounced functionality.
                </p>
              </div>
            </section>

            <section className="policy-section">
              <div className="policy-num">06</div>
              <div className="policy-body">
                <h2>Contact Information</h2>
                <p>
                  For any questions, clarifications, or feedback regarding this policy or your waitlist reservation:
                </p>
                <ul className="policy-list">
                  <li>
                    <strong>Email Inquiries:</strong> <code className="email-placeholder">{SUPPORT_EMAIL}</code>
                  </li>
                  <li>
                    <strong>Direct Inquiries:</strong> DM Koyilada Prem (Founder) or Abhinav (CTO)
                  </li>
                </ul>
              </div>
            </section>

            <section className="policy-section">
              <div className="policy-num">07</div>
              <div className="policy-body">
                <h2>Policy Updates</h2>
                <p>
                  CroevoAI reserves the right to modify or update this Refund Policy periodically to reflect changes in
                  legal requirements, operational workflows, or platform capabilities. Any revised policy will be
                  published directly on this page with an updated revision date.
                </p>
              </div>
            </section>
          </article>

          <div className="policy-actions">
            <RouteLink to="/payments" className="button button-secondary">
              ← Back to Payments
            </RouteLink>
            <WaitlistButton>
              Join the Waitlist
            </WaitlistButton>
          </div>
        </div>
      </section>
    </div>
  );
}
