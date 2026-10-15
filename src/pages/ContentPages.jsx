import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { stages, facilities, notices, faqs } from '../data.js';

export function About() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="Education with heart and purpose."
        text="EAK International School is built around a simple belief: every child deserves the chance to feel confident, curious, and ready to contribute."
      />

      <section className="section">
        <div className="container split-section">
          <div
            className="split-image image-campus"
            role="img"
            aria-label="A green and welcoming school campus"
          />

          <div className="split-copy">
            <p className="eyebrow">Who we are</p>
            <h2>A community where every learner matters.</h2>
            <p>
              Our school brings students, families, and educators together in
              an environment shaped by respect, exploration, and steady growth.
            </p>
            <p>
              We combine strong academic foundations with experiences that
              encourage creativity, teamwork, and responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container values-grid">
          <article>
            <span className="value-symbol">◎</span>
            <h2>Our vision</h2>
            <p>
              To nurture independent thinkers who use their knowledge with
              kindness and purpose.
            </p>
          </article>

          <article>
            <span className="value-symbol">✳</span>
            <h2>Our mission</h2>
            <p>
              To make learning engaging, inclusive, and connected to the world
              around us.
            </p>
          </article>

          <article>
            <span className="value-symbol">♡</span>
            <h2>Our values</h2>
            <p>
              Curiosity, integrity, respect, courage, and a spirit of
              collaboration.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container principal-panel">
          <div className="principal-mark">EAK</div>

          <div>
            <p className="eyebrow">A message from our principal</p>
            <h2>
              “A child’s questions are the beginning of their possibilities.”
            </h2>
            <p>
              At EAK, we want students to feel comfortable asking questions,
              learning from mistakes, and discovering what they can do. When
              school and family work together, children have the confidence
              to take their next step.
            </p>
            <p className="signature">
              The Principal <span>· EAK International School</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}



export function Academics() {
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <>
      <PageIntro
        eyebrow="Learning at EAK"
        title="Strong foundations. Open horizons."
        text="Our learning journey balances academic understanding with practical work, creativity, and the skills students need beyond school."
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Choose a stage</p>
            <h2>Learning grows with your child</h2>
          </div>

          <div
            className="stage-tabs"
            role="tablist"
            aria-label="Education stages"
          >
            {stages.map((stage, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={selectedStage === index}
                className={
                  selectedStage === index
                    ? "stage-tab active"
                    : "stage-tab"
                }
                key={stage.title}
                onClick={() => setSelectedStage(index)}
              >
                {stage.title}
              </button>
            ))}
          </div>

          <article className="stage-detail">
            <div>
              <p className="eyebrow">
                {stages[selectedStage].years}
              </p>

              <h2>{stages[selectedStage].title}</h2>

              <p>{stages[selectedStage].text}</p>

              <ul className="check-list">
                <li>Clear learning goals and regular feedback</li>
                <li>Group activities and hands-on exploration</li>
                <li>Support for individual strengths and needs</li>
              </ul>
            </div>

            <div className="stage-detail-art">
              <span>
                {String(selectedStage + 1).padStart(2, "0")}
              </span>
              <p>Learn with purpose</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">How we teach</p>
            <h2>Learning that connects ideas to life</h2>
          </div>

          <div className="strength-grid">
            <article className="strength-card">
              <span className="card-number">01</span>
              <h3>Ask and explore</h3>
              <p>
                Students discuss questions and investigate ideas,
                rather than only memorising facts.
              </p>
            </article>

            <article className="strength-card">
              <span className="card-number">02</span>
              <h3>Practise and create</h3>
              <p>
                Projects, demonstrations, and creative tasks make
                concepts easier to understand.
              </p>
            </article>

            <article className="strength-card">
              <span className="card-number">03</span>
              <h3>Reflect and improve</h3>
              <p>
                Feedback helps learners recognise progress and
                decide what to work on next.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}



export function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageIntro
        eyebrow="Join our community"
        title="Let’s begin your child’s next chapter."
        text="Our admissions team is here to make the process clear and welcoming. Share your details and we’ll help you understand the next step."
      />

      <section className="section">
        <div className="container admissions-layout">
          <div>
            <p className="eyebrow">The process</p>
            <h2>Five clear steps</h2>

            <ol className="process-list">
              {[
                ["Enquiry", "Tell us a little about your child."],
                [
                  "Application",
                  "Complete the application form and share required documents.",
                ],
                [
                  "Interaction / Assessment",
                  "Meet our team and understand the learning environment.",
                ],
                [
                  "Selection",
                  "The admissions team will explain the outcome and next steps.",
                ],
                [
                  "Enrollment",
                  "Complete the formalities to confirm the place.",
                ],
              ].map(([title, text], index) => (
                <li key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="info-panel">
              <h3>Keep these documents ready</h3>
              <p>
                Birth certificate, previous school records (if applicable),
                recent photographs, and parent or guardian identification.
              </p>
              <p>
                <strong>Note:</strong> Dates and eligibility details are
                illustrative for this frontend prototype. Please contact the
                school for confirmed information.
              </p>
            </div>
          </div>

          <div className="form-panel">
            <p className="eyebrow">Admission enquiry</p>
            <h2>Tell us about your family</h2>

            {submitted ? (
              <div className="success-message" role="status">
                <span>✓</span>
                <h3>Thank you for your interest.</h3>
                <p>
                  This is a frontend demo, so your details have not been sent.
                  In a real website, the admissions team would follow up with
                  you.
                </p>
                <button
                  className="button"
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="parentName">
                  Parent / guardian name
                </label>
                <input
                  id="parentName"
                  name="parentName"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                />

                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                />

                <label htmlFor="grade">Grade of interest</label>
                <select
                  id="grade"
                  name="grade"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a grade
                  </option>
                  {[
                    "Primary School",
                    "Middle School",
                    "Secondary School",
                    "Senior Secondary",
                  ].map((grade) => (
                    <option key={grade}>{grade}</option>
                  ))}
                </select>

                <label htmlFor="message">
                  Anything you would like to ask? <span>(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your question here"
                />

                <button
                  className="button form-submit"
                  type="submit"
                >
                  Send enquiry <span aria-hidden="true">→</span>
                </button>

                <p className="form-note">
                  Demo only: this form does not send or store personal
                  information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className="faq-item" key={faq.question}>
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && <p>{faq.answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



export function Facilities() {
  return (
    <>
      <PageIntro
        eyebrow="Explore our campus"
        title="Spaces for learning, making, and moving."
        text="A good learning environment gives students the tools and space to explore new interests and practise new skills."
      />

      <section className="section">
        <div className="container facility-grid">
          {facilities.map((item, index) => (
            <article className="facility-card" key={item.title}>
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1000&q=80`}
                alt={item.title}
                loading="lazy"
              />

              <div className="facility-copy">
                <span className="card-number">
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-inner">
          <div>
            <p className="eyebrow eyebrow-light">
              See it for yourself
            </p>

            <h2>Picture your child learning here.</h2>
            <p>Contact us to ask about a campus visit.</p>
          </div>

          <Link className="button button-light" to="/contact">
            Plan a visit{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}



export function Events() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = ["All", "Notice", "Event", "Holiday"];

  const filteredNotices = notices.filter(
    (notice) =>
      (filter === "All" || notice.type === filter) &&
      `${notice.title} ${notice.text} ${notice.date}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageIntro
        eyebrow="Stay connected"
        title="What's happening at EAK."
        text="Find school announcements, upcoming activities, and useful reminders for your family."
      />

      <section className="section">
        <div className="container">
          <div className="event-tools">
            <label className="search-field">
              <span className="sr-only">
                Search events and notices
              </span>

              <span aria-hidden="true">⌕</span>

              <input
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setVisibleCount(4);
                }}
                placeholder="Search events and notices"
              />
            </label>

            <div
              className="filter-list"
              aria-label="Filter by category"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    filter === category
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => {
                    setFilter(category);
                    setVisibleCount(4);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="notice-grid">
            {filteredNotices
              .slice(0, visibleCount)
              .map((notice) => (
                <article
                  className="notice-card"
                  key={notice.title}
                >
                  <span className="notice-type">
                    {notice.type}
                  </span>

                  <p className="notice-date">
                    {notice.date}
                  </p>

                  <h3>{notice.title}</h3>
                  <p>{notice.text}</p>
                </article>
              ))}
          </div>

          {filteredNotices.length === 0 && (
            <p className="empty-state">
              No matching updates. Try another search or category.
            </p>
          )}

          {visibleCount < filteredNotices.length && (
            <div className="center-link">
              <button
                className="button button-outline"
                type="button"
                onClick={() =>
                  setVisibleCount(visibleCount + 2)
                }
              >
                Load more updates
              </button>
            </div>
          )}

          <p className="form-note">
            All dates and announcements on this demo site are
            sample content.
          </p>
        </div>
      </section>
    </>
  );
}



export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageIntro
        eyebrow="We'd love to hear from you"
        title="Let's start a conversation."
        text="Ask a question, learn more about admissions, or arrange a visit. Our school office is happy to help."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Get in touch</p>
            <h2>Here to help your family.</h2>

            <div className="contact-item">
              <span className="contact-icon">⌖</span>

              <div>
                <h3>Visit us</h3>
                <p>
                  12 Learning Lane, Bengaluru,
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">☎</span>

              <div>
                <h3>Call the office</h3>
                <p>+91 80 4000 1234</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉</span>

              <div>
                <h3>Email us</h3>
                <p>hello@eakschool.example</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">◷</span>

              <div>
                <h3>Office hours</h3>
                <p>Monday–Friday, 9:00 AM–4:00 PM</p>
              </div>
            </div>

            <p className="form-note">
              Contact details above are fictional examples
              for the assignment.
            </p>
          </div>

          <div className="form-panel">
            <p className="eyebrow">Send a message</p>
            <h2>How can we help?</h2>

            {sent ? (
              <div className="success-message" role="status">
                <span>✓</span>
                <h3>Message prepared!</h3>

                <p>
                  This frontend demo does not send messages.
                  Thank you for trying the contact form.
                </p>

                <button
                  className="button"
                  type="button"
                  onClick={() => setSent(false)}
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="contactName">
                  Your name
                </label>

                <input
                  id="contactName"
                  name="contactName"
                  required
                  autoComplete="name"
                  placeholder="Full name"
                />

                <label htmlFor="contactEmail">
                  Email address
                </label>

                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />

                <label htmlFor="subject">
                  I'm contacting about
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue="Admissions"
                >
                  <option>Admissions</option>
                  <option>Campus visit</option>
                  <option>School activities</option>
                  <option>Other question</option>
                </select>

                <label htmlFor="contactMessage">
                  Message
                </label>

                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  rows="4"
                  required
                  placeholder="How can we help?"
                />

                <button
                  className="button form-submit"
                  type="submit"
                >
                  Send message{" "}
                  <span aria-hidden="true">→</span>
                </button>

                <p className="form-note">
                  Demo only: no information is sent or stored.
                </p>
              </form>
            )}
          </div>

          <div className="map-placeholder">
            <div className="map-pin">⌖</div>

            <h3>Find EAK International School</h3>
            <p>Map preview placeholder</p>
            <span>12 Learning Lane · Bengaluru</span>
          </div>
        </div>
      </section>
    </>
  );
}

