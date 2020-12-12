import React from 'react';

import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Projects from "./components/projects"
import Skills from "./components/skills"
import Footer from "./components/footer"
import Contact from "./components/contact"
function App() {
  return (
      <main className="l-main">
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
  );
}

export default App;
