import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/"><span className="brand-mark">EAK</span><span className="brand-copy"><strong>EAK International</strong><small> SCHOOL</small></span></Link>
          <p>Curious minds. Kind hearts. Confident futures.</p>
        </div>
        <div><h3>Explore</h3><Link to="/about">About us</Link><Link to="/academics">Academics</Link><Link to="/facilities">Facilities</Link></div>
        <div><h3>For families</h3><Link to="/admissions">Admissions</Link><Link to="/events">Events & notices</Link><Link to="/contact">Contact</Link></div>
        <div><h3>Contact</h3><p>12 Learning Lane, Bengaluru, Karnataka</p><p>+91 80 4000 1234</p><p>hello@eakschool.example</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 EAK International School</span><span>Learning with purpose, every day.</span></div>
    </footer>
  );
}
