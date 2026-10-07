import { PageCta, PageHeader } from './PageShared.jsx';

const benefits = [
  { number: '01', icon: '↗', title: 'Early Access', copy: 'Be among the first to experience Croevo as it becomes available.' },
  { number: '02', icon: '✳', title: 'A More Direct Way to Create', copy: 'Explore game creation through conversational ideas, with less friction between a concept and its execution.' },
  { number: '03', icon: '◌', title: 'From Idea to Playable', copy: 'Croevo is designed to help turn raw game concepts into playable experiences.' },
  { number: '04', icon: '⌘', title: 'Creator-First Thinking', copy: 'A mission centered on making game development more approachable for creators of all skill levels.' },
  { number: '05', icon: '⌁', title: 'Early Influence', copy: 'As an early member, you can help shape the product as Croevo evolves.' },
  { number: '06', icon: '◈', title: 'Launch Benefits', copy: 'Access launch-related benefits. Specific details will be shared closer to launch.' },
];

export default function Benefits() {
  return (
    <div className="page benefits-page">
      <section className="page-hero section-shell compact-hero">
        <PageHeader eyebrow="A PLACE AT THE BEGINNING" title="Why Join Croevo Early?" description="Get closer to a new approach to game creation—and to the product as it takes shape." />
      </section>
      <section className="page-section section-shell benefits-section">
        <div className="benefit-grid">{benefits.map((item, index) => <article className="benefit-card reveal" style={{ '--delay': `${index * 70}ms` }} key={item.number}><div className="benefit-card-top"><span>{item.number}</span><b>{item.icon}</b></div><h2>{item.title}</h2><p>{item.copy}</p><span className="benefit-card-glow"/></article>)}</div>
      </section>
      <section className="why-early section-shell reveal">
        <div className="why-early-index">WHY<br/><span>BE EARLY?</span></div>
        <div><span className="eyebrow">CLOSER TO THE BEGINNING</span><h2>Be part of the <span>evolution.</span></h2><p>Joining early puts you closer to Croevo and its development. The paid waitlist opens on 15 October 2026; further details will be shared as launch approaches.</p></div>
        <div className="why-early-mark">c<span>.</span></div>
      </section>
      <PageCta eyebrow="START WITH THE FIRST STEP" title={<>Come in <span>early.</span></>} />
    </div>
  );
}
