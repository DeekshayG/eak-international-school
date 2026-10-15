import React from 'react';
import { Link } from 'react-router-dom';
import { facilities, stages, strengths, notices } from '../data.js';

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="Students learning together in a bright classroom" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow-light">A brighter way to learn</p>
          <h1>Curiosity today.<br /><em>Confidence</em> for life.</h1>
          <p className="hero-text">A caring learning community where children explore their interests, discover their strengths, and prepare for a changing world.</p>
          <div className="hero-actions"><Link className="button" to="/admissions">Explore admissions <span aria-hidden="true">↗</span></Link><Link className="text-link light-link" to="/about">Discover our school <span aria-hidden="true">→</span></Link></div>
          <div className="hero-note"><span className="note-dot" /> Thoughtful learning. Meaningful growth.</div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container"><SectionHeading eyebrow="The EAK difference" title="A school that sees every possibility" text="Learning is more than what happens in a classroom. It is the confidence to try, the courage to ask, and the joy of finding out." />
          <div className="strength-grid">{strengths.map((item) => <article className="strength-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section"><div className="split-image image-campus" role="img" aria-label="Green school campus with a welcoming outdoor space"><span className="image-caption">A place to feel at home</span></div><div className="split-copy"><p className="eyebrow">Welcome to EAK</p><h2>Big ideas begin with a sense of belonging.</h2><p>We bring together caring educators, active learning, and opportunities beyond the textbook. Our goal is to help students grow into thoughtful, capable, and compassionate people.</p><p>Every learner brings a different spark. We make space for each one to shine.</p><Link className="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="section section-green">
        <div className="container"><SectionHeading eyebrow="Learning journey" title="Growing at every stage" text="Age-appropriate learning helps students build strong foundations and take on new challenges with confidence." /><div className="stage-grid">{stages.map((stage, index) => <article className="stage-card" key={stage.title}><span className="stage-index">0{index + 1}</span><p className="stage-years">{stage.years}</p><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div><div className="center-link"><Link className="button button-light" to="/academics">Explore academics <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="section">
        <div className="container"><SectionHeading eyebrow="Made for discovery" title="Spaces that make learning come alive" text="From experiments to performances, our facilities give students room to imagine, practise, and create." /><div className="facility-grid home-facility-grid">{facilities.slice(0, 3).map((item) => <article className="facility-card" key={item.title}><img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=80`} alt={item.title} loading="lazy"/><div className="facility-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div><div className="center-link"><Link className="text-link" to="/facilities">View all facilities <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="section section-paper">
        <div className="container"><div className="section-row"><SectionHeading eyebrow="From the school desk" title="The latest at EAK" text="A few dates and updates to keep families connected."/><Link className="text-link" to="/events">All events and notices <span aria-hidden="true">→</span></Link></div><div className="notice-grid">{notices.slice(0, 3).map((notice) => <article className="notice-card" key={notice.title}><span className="notice-type">{notice.type}</span><p className="notice-date">{notice.date}</p><h3>{notice.title}</h3><p>{notice.text}</p></article>)}</div></div>
      </section>

      <section className="closing-cta"><div className="container closing-inner"><div><p className="eyebrow eyebrow-light">Your next chapter starts here</p><h2>Come and see what learning can become.</h2><p>We would love to help you explore whether EAK is the right fit for your family.</p></div><Link className="button button-light" to="/admissions">Start an enquiry <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
