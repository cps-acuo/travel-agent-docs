'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import CustomSearchDialog from '@/components/search';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog: (props) => (
          <Suspense fallback={null}>
            <CustomSearchDialog {...props} />
          </Suspense>
        ),
      }}
    >
      {children}
    </RootProvider>
  );
}
