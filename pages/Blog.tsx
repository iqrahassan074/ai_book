import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User as UserIcon } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Engineering Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Updates from the world of Humanoid Robotics and AI.</p>
      </div>

      <div className="grid gap-8">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <UserIcon className="w-4 h-4" />
                {post.author}
              </div>
            </div>
            <div className="prose dark:prose-invert mb-6 text-gray-600 dark:text-gray-300">
              <p>{post.excerpt}</p>
            </div>
            <button className="text-primary-600 font-medium hover:text-primary-700 hover:underline">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};
