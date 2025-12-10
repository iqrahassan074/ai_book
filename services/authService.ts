import { User } from '../types';

// Mock backend service
// In a real app, this would make HTTP requests to a Python FastAPI backend

const STORAGE_KEY = 'humanoid_user_session';

export const login = async (username: string): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const user: User = {
    username,
    token: 'mock-jwt-token-' + Math.random().toString(36).substring(2)
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};
