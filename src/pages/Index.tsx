
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
