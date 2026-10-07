import { PageCta, PageHeader } from './PageShared.jsx';

const chapters = [
  { number: '01', title: 'Where It Started', copy: 'Game ideas can be vivid and full of possibility. Turning them into a playable experience can take more work than the idea itself. Croevo begins with a simple question: what if getting started felt more natural?', tag: 'THE IDEA' },
  { number: '02', title: 'Why Croevo', copy: 'Croevo’s mission is to empower creators of all skill levels by reducing friction in game development. It brings conversational input together with AI-assisted generation to help move an idea toward a playable reality.', tag: 'THE PURPOSE' },
  { number: '03', title: 'Where We’re Going', copy: 'Toward a more approachable way to create games: describe what you imagine, shape the experience, and make room for more people to bring ideas to life.', tag: 'THE DIRECTION' },
  { number: '04', title: 'You’re Early', copy: 'Croevo is still taking shape. Joining the paid waitlist is a way to follow the journey from its early chapter and discover more as launch gets closer.', tag: 'RIGHT NOW' },
];

export default function Story() {
  return (
    <div className="page story-page">
      <section className="page-hero section-shell story-hero">
        <PageHeader eyebrow="A LITTLE ABOUT THE WHY" title="Our Story" description="A more approachable path from imagining a game to experiencing it." />
        <div className="story-intro-mark reveal"><span>c<span>.</span></span><i/><small>AN IDEA<br/>IN MOTION</small></div>
      </section>
      <section className="story-timeline section-shell">
        <div className="timeline-rail"><span/><span/><span/><span/></div>
        {chapters.map((chapter, index) => <article className={`story-chapter reveal${index % 2 ? ' chapter-offset' : ''}`} style={{ '--delay': `${index * 90}ms` }} key={chapter.number}>
          <div className="chapter-marker"><span>{chapter.number}</span><i/></div>
          <div className="chapter-copy"><span className="eyebrow">{chapter.tag}</span><h2>{chapter.title}</h2><p>{chapter.copy}</p></div>
          <div className="chapter-orbit" aria-hidden="true"><span>{chapter.number}</span></div>
        </article>)}
      </section>
      <section className="story-journey section-shell reveal"><div className="journey-heading"><span className="eyebrow">A JOURNEY IN PROGRESS</span><h2>Idea to <span>what's next.</span></h2></div><div className="journey-track">{[['01','IDEA'],['02','BUILD'],['03','EARLY COMMUNITY'],['04','LAUNCH'],['05','WHAT’S NEXT']].map(([number, label], index) => <div className={`journey-step${index === 2 ? ' current' : ''}`} key={number}><span>{number}</span><b>{label}</b></div>)}</div></section>
      <PageCta eyebrow="YOU’RE PART OF THE EARLY CHAPTER" title={<>The story is <span>unfolding.</span></>} />
    </div>
  );
}
