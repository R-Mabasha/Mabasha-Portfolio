
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav aria-label="Main navigation" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Mabasha R. - Back to top"
          className="flex items-center space-x-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-md py-1"
        >
          <span className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-mono text-xs font-semibold text-zinc-100 group-hover:border-zinc-500 transition-colors">
            MR
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            Mabasha R.
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
          {navigation.map((item) => {
            const targetId = item.name.toLowerCase();
            const isActive = activeSection === targetId;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(targetId)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                  isActive
                    ? 'text-zinc-100 bg-zinc-800/70 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30'
                }`}
              >
                {item.name}
              </button>
            );
          })}

          <a
            href="mailto:mabasham52@gmail.com"
            className="ml-3 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800 px-4 py-3 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.name.toLowerCase())}
              className="w-full text-left px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-md transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800/80">
            <a
              href="mailto:mabasham52@gmail.com"
              className="block w-full text-center px-3 py-2 text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-md"
            >
              Get in touch · mabasham52@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
