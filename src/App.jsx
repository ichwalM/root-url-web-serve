import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles, Code } from 'lucide-react';
import ProjectCard from './projects/ProjectsCard.jsx';
import PortfolioCard from './portfolio/PortfolioCard.jsx';
import HeroHeader from './pages/HeroHeader.jsx';

const projects = [
  {
    id: 1,
    image: '/projects/riset-fikom.png',
    title: 'Rsearch Fikom App',
    description: '',
    tech: ['LARAVEL', 'ALPINE JS', 'MYSQL', 'TAILWIND'],
    url: 'http://172.125.0.236/riset-app',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 2,
    image: '/projects/monitoring.png',
    title: 'Monitoring App',
    description: '',
    tech: ['PHP', 'JavaScript', 'BOOTSTRAP', 'MYSQL'],
    url: 'https://103.133.36.131/s/monitoring-praktikum',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 2,
    image: '/projects/sipemla.png',
    title: 'SIPEMLA APP',
    description: '',
    tech: ['PHP', 'JavaScript', 'BOOTSTRAP', 'MYSQL'],
    url: 'https://103.133.36.131/s/SIPEMLA',
    gradient: 'from-blue-400 to-cyan-400'
  },
];

const portfolioCollections = [
  {
    id: 1,
    image: '/portfolio/ichwal.png',
    title: 'Ichwal Portfolio',
    description: 'Innovative web application for business management and analytics.',
    tech: ['REACT', 'TAILWIND'],
    url: 'http://172.125.0.236/ichwal',
    gradient: 'from-blue-400 to-cyan-400'
  },
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);


  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        
        {/* Header */}
        <HeroHeader setIsDark={setIsDark} isDark={isDark} />

        {/* Portfolio Collections Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code className="w-8 h-8 text-sky-500" />
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white animate-fade-in">
                Portfolio
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              Explore our curated collections of projects organized by category
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full animate-fade-in" style={{ animationDelay: '100ms' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCollections.map((portfolio, index) => (
              <div key={portfolio.id} className="animate-fade-in">
                <PortfolioCard portfolio={portfolio} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Individual Projects Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code className="w-8 h-8 text-sky-500" />
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white animate-fade-in">
                IC-LAB-APP
              </h3>
            </div>
            {/* <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              Check out our latest and most exciting individual projects
            </p> */}
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full animate-fade-in" style={{ animationDelay: '100ms' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              &copy; 2025 IC-LAB-APP. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Innovation & Creativity Laboratory
            </p>
          </div>
        </footer>
      </div>

    </div>
  );
}