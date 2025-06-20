import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={
          <Layout>
            <AboutMe />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout>
            <Projects />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactMe />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

// Optional layout wrapper to reuse header/footer
const Layout = ({ children }) => (
  <div className="App">
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </header>

    <main>{children}</main>

    <footer>
      <p>&copy; 2024 Patricia J. Gallego</p>
    </footer>
  </div>
);

export default App;
