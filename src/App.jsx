import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Competitions } from './components/Competitions/Competitions';
import { Academics } from './components/Academics/Academics';
import { Copyright } from './components/Copyright/Copyright';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Academics />
      <Competitions />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
