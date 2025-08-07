import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { SidebarFooter } from '@/components/sidebar-footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions}
      disableThemeSwitch={true}
      sidebar={{
        footer: <SidebarFooter />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
