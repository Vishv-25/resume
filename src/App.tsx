import { useState, useEffect } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Coursework from './components/Coursework';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import CustomCursor from './components/CustomCursor';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error) {
    // Optionally log error
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-8 bg-red-100 text-red-800 text-center font-bold text-xl">
          Something went wrong: {this.state.error.message}
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          <main>
            <ErrorBoundary>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Coursework />
              <Extracurricular />
              <Contact />
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;