import React, { Component } from 'react';
import '../css/App.css';
import NavBar from './NavBar/NavBar'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="portfolio">
        <NavBar />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </div>
    );
  }
}

export default App;
