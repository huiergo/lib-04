import React, { createContext } from 'react';
import type { Context, ReactNode } from 'react';

export type Theme = 'dark' | 'light';
export type PrimaryColor = string;

export interface ConfigProviderProps {
  prefix: string;
  theme: Theme;
  primaryColor: PrimaryColor;
  children?: ReactNode;
}
