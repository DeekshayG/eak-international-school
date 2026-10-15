import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  ['Home', '/'], ['About', '/about'], ['Academics', '/academics'],
  ['Admissions', '/admissions'], ['Facilities', '/facilities'],
  ['Events & Notices', '/events'], ['Contact', '/contact'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="top-strip">A welcoming place to learn, grow, and belong.</div>
      <div className="nav-wrap container">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="EAK International School home">
          <span className="brand-mark">EAK</span>
          <span className="brand-copy"><strong>EAK International</strong><small> SCHOOL</small></span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={closeMenu} end={path === '/'}>{label}</NavLink>
          ))}
          <Link className="button button-small nav-cta" to="/admissions" onClick={closeMenu}>Apply now</Link>
        </nav>
      </div>
    </header>
  );
}
