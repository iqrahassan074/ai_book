import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CHAPTERS } from '../constants';
import { ChevronLeft, ChevronRight, Edit } from 'lucide-react';

export const ChapterPage: React.FC = () => {
  const { slug } = useParams();
  
  // Default to first chapter if root /docs is hit
  const currentChapter = CHAPTERS.find(c => c.slug === slug) || CHAPTERS[0];

  if (!currentChapter) {
    return <Navigate to="/docs/intro" replace />;
  }

  const prevChapter = currentChapter.prevChapter 
    ? CHAPTERS.find(c => c.slug === currentChapter.prevChapter) 
    : null;
    
  const nextChapter = currentChapter.nextChapter 
    ? CHAPTERS.find(c => c.slug === currentChapter.nextChapter) 
    : null;

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
         <Link to="/docs/intro" className="hover:text-primary-600 transition-colors">Docs</Link>
         <span>/</span>
         <span className="font-medium text-gray-900 dark:text-gray-200">{currentChapter.title}</span>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-gray-100">
          {currentChapter.title}
        </h1>
        <div className="mt-8">
          {currentChapter.content}
        </div>
      </div>

       {/* Edit on GitHub */}
       <div className="mt-10 mb-6">
         <a href="#" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
            <Edit className="w-3.5 h-3.5" />
            Edit this page on GitHub
         </a>
       </div>

      <hr className="my-8 border-gray-200 dark:border-gray-800" />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        {prevChapter ? (
          <Link 
            to={`/docs/${prevChapter.slug}`}
            className="flex flex-col items-start p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 transition-all group w-[48%]"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:text-primary-600 font-medium">
              <ChevronLeft className="w-4 h-4" /> Previous
            </span>
            <span className="font-bold text-lg mt-1 group-hover:text-primary-600 transition-colors">{prevChapter.title}</span>
          </Link>
        ) : (
          <div className="w-[48%]" />
        )}

        {nextChapter && (
          <Link 
            to={`/docs/${nextChapter.slug}`}
            className="flex flex-col items-end p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 transition-all group w-[48%]"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:text-primary-600 font-medium">
              Next <ChevronRight className="w-4 h-4" />
            </span>
            <span className="font-bold text-lg mt-1 group-hover:text-primary-600 transition-colors">{nextChapter.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
};