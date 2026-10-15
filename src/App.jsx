import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import { About, Academics, Admissions, Facilities, Events, Contact } from './pages/ContentPages.jsx';

function NotFound() {
  return <main className="page-intro"><div className="container"><p className="eyebrow">404 · Page not found</p><h1>Looks like this page took a different path.</h1><p className="intro-text">The page may have moved. Head back to the home page to continue exploring.</p><a className="button" href="/">Back to home</a></div></main>;
}

export default function App() {
  return <><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/academics" element={<Academics />} /><Route path="/admissions" element={<Admissions />} /><Route path="/facilities" element={<Facilities />} /><Route path="/events" element={<Events />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></>;
}
