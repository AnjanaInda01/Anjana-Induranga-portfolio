import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "My Works", href: "#works" },
    { name: "My Skills", href: "#skills" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Contact Me", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Desktop Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="
          hidden md:flex
          fixed top-6 right-6 z-50
          w-11 h-11
          items-center justify-center
          rounded-full
          bg-primary/90 hover:bg-primary
          shadow-lg
          transition
        "
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b dark:border-dark-border light:border-light-border dark:bg-dark-bg/80 light:bg-light-bg/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider">
            ANJANA INDURANGA
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden
              relative
              w-10 h-10
              flex items-center justify-center
              rounded-xl
              backdrop-blur-md
              bg-white/10 dark:bg-black/20
              border border-white/10
              transition-all duration-300
              active:scale-95
            "
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300
                ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}
              `}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300
                ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}
              `}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-300
            ${isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-4 py-5 space-y-4 border-t dark:border-dark-border light:border-light-border dark:bg-dark-bg light:bg-light-bg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="block text-sm font-medium opacity-80 hover:text-primary transition"
              >
                {item.name}
              </a>
            ))}

            {/* Divider */}
            <div className="h-px bg-white/10 my-2" />

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="
                w-full
                flex items-center justify-between
                px-4 py-3
                rounded-xl
                bg-white/5 hover:bg-white/10
                transition
              "
            >
              <span className="text-sm opacity-80">
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Projects />
        <Skills />
        <Qualifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t dark:border-dark-border light:border-light-border py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-lg font-semibold">Anjana Induranga</h3>
          <p className="text-sm opacity-70">
            Full Stack Developer & DevOps Engineer
          </p>

          <p className="text-xs opacity-50 pt-4">
            © {new Date().getFullYear()} Anjana Induranga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
