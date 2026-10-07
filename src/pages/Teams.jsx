import { PageCta, PageHeader } from './PageShared.jsx';

const audiences = [
  { number: '01', icon: '⌘', title: 'Builders', copy: 'For people who want to turn a game idea into something playable, without letting technical friction get in the way.' },
  { number: '02', icon: '✳', title: 'Creators', copy: 'For imaginative people at every skill level, ready to explore game creation through a more direct, conversational experience.' },
  { number: '03', icon: '◌', title: 'Innovators', copy: 'For people curious about how AI can make game development more approachable—from the first concept to the core experience.' },
  { number: '04', icon: '↗', title: 'Early Believers', copy: 'For people who want to discover Croevo early and be part of its journey as the experience takes shape.' },
];

export default function Teams() {
  return (
    <div className="page teams-page">
      <section className="page-hero section-shell">
        <PageHeader eyebrow="MADE FOR CREATIVE MINDS" title="Built for People Who Want to Build What's Next." description="Croevo is for people with game ideas—whether you're already building or just beginning to explore what's possible." />
        <div className="audience-visual reveal" aria-label="Different creative roles coming together">
          <div className="audience-orbit orbit-a"/><div className="audience-orbit orbit-b"/>
          <div className="audience-center"><span>c<span>.</span></span><small>ONE IDEA<br/>MANY WAYS IN</small></div>
          {audiences.map((item, index) => <div className={`audience-node audience-node-${index + 1}`} key={item.number}><span>{item.icon}</span><b>{item.title}</b></div>)}
          <div className="audience-label label-top">IDEAS</div><div className="audience-label label-bottom">INTO PLAYABLE EXPERIENCES</div>
        </div>
      </section>
      <section className="page-section section-shell">
        <div className="page-section-heading reveal"><span className="eyebrow">A PLACE FOR EVERY KIND OF MAKER</span><h2>Different starting points.<br/><span>One creative instinct.</span></h2><p>Describe a vision, explore the possibilities, and find your way into game creation.</p></div>
        <div className="audience-grid">{audiences.map((item, index) => <article className="audience-card reveal" style={{ '--delay': `${index * 80}ms` }} key={item.number}><div className="audience-card-top"><span>{item.number}</span><b>{item.icon}</b></div><h3>{item.title}</h3><p>{item.copy}</p><div className="card-bottom-line"/></article>)}</div>
      </section>
      <section className="teams-note section-shell reveal"><span className="eyebrow">THE CROEVO IDEA</span><p>Bring your imagination. Croevo is being built to help move from <em>“what if?”</em> toward a game you can experience.</p></section>
      <PageCta eyebrow="YOUR IDEA CAN START HERE" title={<>Make room for <span>what's next.</span></>} description="Join the Croevo paid waitlist when it opens on 15 October 2026." secondary={{ to: '/benefits', label: 'Discover the Benefits' }} />
    </div>
  );
}
