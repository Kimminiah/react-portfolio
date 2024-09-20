import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>
      
      <main>
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>
      
      <footer>
        <p>&copy; 2024 Patricia J. Gallego</p>
      </footer>
    </div>
  );
}

export default App;
