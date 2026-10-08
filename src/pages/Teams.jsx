import TeamMemberCard from '../components/TeamMemberCard.jsx';
import WaitlistButton from '../components/WaitlistButton.jsx';
import RouteLink from '../components/RouteLink.jsx';
import { PageHeader } from './PageShared.jsx';

/**
 * =======================================================================
 * TEAM DATA CONFIGURATION
 * =======================================================================
 * 
 * To add actual team photos:
 * 1. Put image files inside `src/assets/team/` (e.g. prem.jpg, abhinav.jpg, mouli.jpg)
 * 2. Set the `image` field below to the path or imported asset.
 * 3. The `TeamMemberImage` component will automatically display the photo with
 *    proper aspect ratio (4:5) and object-fit: cover.
 * 4. If `image` is null or fails to load, an elegant placeholder is displayed.
 */
const teamMembers = [
  {
    id: 'prem',
    name: 'Koyilada Prem',
    role: 'Founder',
    alt: 'Koyilada Prem - Founder of croevoAI',
    image: null, // Replace with photo: e.g. '/src/assets/team/prem.jpg' or imported asset
    bio: [
      "I'm Prem, the person building croevoAI.",
      "I tried making a game myself. Picked up an engine, got a few hours in, and realized most of my time was going into learning the tool, not making the game.",
      "That's the gap croevoAI is trying to close — describe what you want, and let the AI handle the part that usually stops people before they even start.",
      "It's concept stage right now. I'm building it in the open, one piece at a time."
    ],
    socials: {
      // Optional: Add verified social URLs when available
      x: '',
      linkedin: '',
      github: ''
    }
  },
  {
    id: 'abhinav',
    name: 'Abhinav',
    role: 'CTO',
    alt: 'Abhinav - CTO of croevoAI',
    image: null, // Replace with photo: e.g. '/src/assets/team/abhinav.jpg' or imported asset
    // TODO: Add Abhinav's real technical background here.
    bio: [
      "Abhinav is building the engineering side of croevoAI.",
      "Right now that means figuring out how to turn a plain description into a working game, one piece at a time."
    ],
    socials: {
      // Optional: Add verified social URLs when available
      x: '',
      linkedin: '',
      github: ''
    }
  },
  {
    id: 'mouli',
    name: 'Mouli',
    role: 'CMO',
    alt: 'Mouli - CMO of croevoAI',
    image: null, // Replace with photo: e.g. '/src/assets/team/mouli.jpg' or imported asset
    bio: [
      "Mouli is handling how people find out about croevoAI — the posts, the outreach, the conversations in gamedev communities.",
      "Learning a lot of this as we go, which honestly fits the rest of this project: we're not pretending to have it all figured out, just building it in the open."
    ],
    socials: {
      // Optional: Add verified social URLs when available
      x: '',
      linkedin: '',
      github: ''
    }
  }
];

const processSteps = [
  { step: '01', title: 'IDEA', desc: 'Concept & Vision', active: false },
  { step: '02', title: 'BUILD', desc: 'Architecture & Engine', active: true },
  { step: '03', title: 'TEST', desc: 'Community Feedback', active: false },
  { step: '04', title: 'ITERATE', desc: 'Refining Experience', active: false },
];

export default function Teams() {
  return (
    <div className="page teams-page">
      {/* ===================================================
          PAGE HERO
          =================================================== */}
      <section className="page-hero section-shell teams-hero">
        <PageHeader 
          eyebrow="THE PEOPLE BEHIND CROEVOAI" 
          title={<>Meet the <span>Team</span></>} 
          description="We're building croevoAI in the open — one piece at a time." 
        />
        
        <div className="teams-hero-visual reveal" aria-label="CroevoAI Core Team Concept Visual">
          <div className="hero-orb-ring ring-1" aria-hidden="true" />
          <div className="hero-orb-ring ring-2" aria-hidden="true" />
          <div className="teams-hero-core">
            <span className="core-symbol">c<span>.</span></span>
            <small>BUILDING IN<br />THE OPEN</small>
          </div>
          <div className="hero-tag-pill tag-pill-1" aria-hidden="true">
            <span className="pulse-dot" /> 3 CORE BUILDERS
          </div>
          <div className="hero-tag-pill tag-pill-2" aria-hidden="true">
            <span>✳</span> CONCEPT STAGE
          </div>
        </div>
      </section>

      {/* ===================================================
          MAIN TEAM SECTION
          =================================================== */}
      <section className="page-section section-shell team-members-section">
        <div className="page-section-heading reveal">
          <span className="eyebrow">CORE BUILDERS</span>
          <h2>The Main <span>Team</span></h2>
          <p>The individuals turning conversational ideas into playable game experiences.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              alt={member.alt}
              socials={member.socials}
              delay={index * 90}
            />
          ))}
        </div>
      </section>

      {/* ===================================================
          BUILDING IN THE OPEN SECTION
          =================================================== */}
      <section className="open-build-section section-shell reveal">
        <div className="open-build-card">
          <div className="open-build-header">
            <span className="eyebrow">THE PROCESS</span>
            <h2>Building in the <span>Open</span></h2>
            <p>croevoAI is still at the concept stage. We're figuring things out, sharing the process, and building one piece at a time.</p>
          </div>

          <div className="process-timeline" aria-label="CroevoAI development cycle: Idea, Build, Test, Iterate">
            <div className="process-track-line" aria-hidden="true" />
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div key={step.title} className={`process-node${step.active ? ' is-active' : ''}`}>
                  <div className="node-marker">
                    <span className="node-index">{step.step}</span>
                    <span className="node-dot" />
                  </div>
                  <div className="node-info">
                    <strong className="node-title">{step.title}</strong>
                    <span className="node-desc">{step.desc}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <span className="node-arrow" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          JOIN US / CTA SECTION
          =================================================== */}
      <section className="page-cta section-shell reveal">
        <div className="page-cta-orbit" aria-hidden="true" />
        <div className="page-cta-content">
          <span className="eyebrow">BE PART OF THE JOURNEY</span>
          <h2>Want to Be Part of <span>What's Next?</span></h2>
          <p>We're building croevoAI in the open.</p>
          <div className="page-cta-actions">
            <WaitlistButton>Join the Waitlist</WaitlistButton>
            <RouteLink className="button button-secondary" to="/story">
              Our Story <span aria-hidden="true">↗</span>
            </RouteLink>
          </div>
        </div>
      </section>
    </div>
  );
}
