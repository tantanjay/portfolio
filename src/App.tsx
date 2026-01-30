import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Skills />
      <Education />
      <Experience />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
