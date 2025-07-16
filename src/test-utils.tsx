import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <HelmetProvider>
    {children}
  </HelmetProvider>
);
