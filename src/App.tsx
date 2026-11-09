import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Evolution from './components/sections/Evolution';
import Work from './components/sections/Work';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Evolution />
      <Work />
      <Education />
      <Contact />
    </Layout>
  );
}

export default App;
