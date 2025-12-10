import React, { useState } from 'react';
import { BrainCircuit, Loader2, ArrowRight } from 'lucide-react';
import { login } from '../services/authService';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

export const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const user = await login(username);
      onLogin(user);
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1b1b1d] flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex flex-col items-center">
        <div className="bg-primary-600 p-4 rounded-2xl shadow-lg mb-4">
          <BrainCircuit className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Humanoid<span className="text-primary-500">.ai</span></h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Sign in to access the robotics manual</p>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-[#242526] rounded-2xl shadow-xl border border-gray-100 dark:border-[#303846] p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#18191a] border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none text-gray-900 dark:text-white transition-all"
              placeholder="e.g. android_dreamer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#18191a] border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none text-gray-900 dark:text-white transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Enter Portal <ArrowRight className="w-5 h-5" /></>}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Powered by Python FastAPI (Simulated) & React
          </p>
        </div>
      </div>
    </div>
  );
};
