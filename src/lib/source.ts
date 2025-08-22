import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement, type ReactElement } from 'react';
import { icons } from 'lucide-react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // Ensure we only ever return a ReactElement or undefined (never null) to satisfy fumadocs-ui types
  icon(iconName: string | undefined): ReactElement | undefined {
    if (iconName && iconName in icons) {
      const C = icons[iconName as keyof typeof icons];
      return createElement(C);
    }
    return undefined;
  },
});
