'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import CustomSearchDialog from '@/components/search';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog: CustomSearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}
