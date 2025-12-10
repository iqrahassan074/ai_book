import { ReactNode } from 'react';

export interface Chapter {
  id: string;
  title: string;
  slug: string;
  content: ReactNode;
  nextChapter?: string;
  prevChapter?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: ReactNode;
}

export interface User {
  username: string;
  token: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
