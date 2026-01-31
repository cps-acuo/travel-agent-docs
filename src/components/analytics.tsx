'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');

    window.gtag?.('config', 'G-DVNXWVQH7L', {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
