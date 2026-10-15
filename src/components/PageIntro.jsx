import React from 'react';
export default function PageIntro({ eyebrow, title, text }) {
  return <section className="page-intro">
    <div className="container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-text">{text}</p>
      </div>
    </section>;
}
