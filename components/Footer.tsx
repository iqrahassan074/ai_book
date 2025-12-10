import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#151516] border-t border-gray-200 dark:border-[#303846] py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-2">
           <div className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-gray-100 mb-4">
             Humanoid AI Book
           </div>
           <p className="text-gray-600 dark:text-gray-400 max-w-xs text-sm leading-relaxed">
             The open source documentation for the next generation of robotics engineers. Built with React, Tailwind, and Gemini.
           </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Docs</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#/docs/intro" className="hover:text-primary-600 dark:hover:text-primary-400">Introduction</a></li>
            <li><a href="#/docs/brain" className="hover:text-primary-600 dark:hover:text-primary-400">The Brain</a></li>
            <li><a href="#/docs/build" className="hover:text-primary-600 dark:hover:text-primary-400">Build Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Community</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">GitHub</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Discord</a></li>
            <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>Copyright © {new Date().getFullYear()} Humanoid AI Project.</p>
        <div className="flex gap-4">
          <Github className="w-5 h-5 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
          <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};