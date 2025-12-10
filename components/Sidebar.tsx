import React from 'react';
import { NavLink } from 'react-router-dom';
import { CHAPTERS } from '../constants';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-[300px] shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto border-r border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg thin-scrollbar">
      <div className="py-6 px-4">
        {/* Category Header */}
        <div className="mb-2 px-3">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm tracking-wide">
            THE BOOK
            </h3>
        </div>
        
        <nav className="space-y-0.5">
          {CHAPTERS.map((chapter) => (
            <NavLink
              key={chapter.id}
              to={`/docs/${chapter.slug}`}
              className={({ isActive }) => `
                block px-3 py-2 rounded-md text-sm transition-all duration-200
                ${isActive 
                  ? 'bg-primary-50 text-primary-600 font-medium dark:bg-primary-900/10 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                }
              `}
            >
              {chapter.title}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-8 px-3">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm tracking-wide mb-2">
            RESOURCES
            </h3>
          <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">API Reference</a>
          <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">Python SDK</a>
        </div>
      </div>
    </aside>
  );
};