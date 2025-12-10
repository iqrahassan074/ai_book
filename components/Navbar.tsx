import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, BrainCircuit, ExternalLink } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isDocPage = location.pathname.startsWith('/docs') || location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/90 dark:bg-[#1b1b1d]/90 border-b border-gray-200 dark:border-[#303846]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo & Links */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <BrainCircuit className="w-7 h-7 text-primary-600" />
            <span className="hidden sm:inline-block tracking-tight">Humanoid Book</span>
            <span className="sm:hidden">Humanoid</span>
          </Link>
          
          <div className="flex items-center gap-1 sm:gap-2 text-sm font-medium">
            <Link 
              to="/docs/intro" 
              className={`px-3 py-2 rounded-md transition-colors ${isDocPage ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10' : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              Docs
            </Link>
            <Link 
              to="/blog" 
              className={`px-3 py-2 rounded-md transition-colors ${isBlogPage ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10' : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            GitHub
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
          
          <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1"></div>
          
          <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
            {theme === Theme.LIGHT ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};