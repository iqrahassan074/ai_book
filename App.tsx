import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Chatbot } from './components/Chatbot';
import { HomePage } from './pages/Home';
import { ChapterPage } from './pages/Chapter.tsx';
import { BlogPage } from './pages/Blog';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.DARK;
    }
    return Theme.LIGHT;
  });

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-sans">
        <Navbar 
          theme={theme}
          toggleTheme={toggleTheme}
        />
        
        <Routes>
          {/* Home Page (Full width, internal layout management) */}
          <Route path="/" element={<HomePage />} />
          
          {/* Documentation Routes (Sidebar + Content) */}
          <Route path="/docs/*" element={
            <div className="flex flex-1 max-w-[1600px] w-full mx-auto">
              <Sidebar />
              <main className="flex-1 w-full min-w-0">
                <Routes>
                  <Route path=":slug" element={<ChapterPage />} />
                </Routes>
              </main>
            </div>
          } />

          {/* Blog Routes (Centered Content) */}
          <Route path="/blog" element={
            <div className="flex-1 max-w-[1600px] w-full mx-auto">
              <main className="flex-1 w-full">
                <BlogPage />
              </main>
            </div>
          } />
        </Routes>

        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;