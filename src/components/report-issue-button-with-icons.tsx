'use client';

import { Bug, ExternalLink } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import type { ReactElement } from 'react';

interface ReportIssueButtonProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export function ReportIssueButtonWithIcons({ 
  className = '', 
  variant = 'default' 
}: ReportIssueButtonProps): ReactElement {
  // We rely on usePathname so the path updates on client-side navigation even if
  // this component (inside a layout) does not remount. We only capture origin once.
  const pathname = usePathname();
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    // window.location.origin is stable; capture after mount to avoid SSR mismatch.
    setOrigin(window.location.origin);
  }, []);
  
  const fullUrl = useMemo(() => (origin && pathname ? `${origin}${pathname}` : ''), [origin, pathname]);
  
  const createIssueUrl = () => {
    const baseUrl = 'https://github.com/cps-acuo/travel-agent-docs/issues/new';
    const template = 'documentation-issue.yml';
    
    const params = new URLSearchParams();
    params.set('template', template);
    if (fullUrl) params.set('page-url', fullUrl);
    // Put the path in the issue title (kept concise) and rely on the form field for full URL.
    params.set('title', `[DOCS]: Issue on ${pathname}`);
    // Fallback: if for any reason the form template is not applied, prefill description.
    if (fullUrl) {
      params.set('body', `Page URL: ${fullUrl}\n\nDescribe the issue here...`);
    }

    return `${baseUrl}?${params.toString()}`;
  };

  const buttonClasses = variant === 'compact' 
    ? `inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md hover:bg-accent ${className}`
    : `inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-accent ${className}`;

  const iconSize = variant === 'compact' ? 14 : 16;

  // Don't render the link until we have the URL to prevent hydration issues
  if (!origin) {
    return (
      <div className={buttonClasses}>
        <Bug size={iconSize} />
        {variant === 'default' ? 'Report Issue' : 'Issue'}
        <ExternalLink size={iconSize - 2} className="opacity-50" />
      </div>
    );
  }

  return (
    <a
      href={createIssueUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      title="Report an issue with this documentation page"
    >
      <Bug size={iconSize} />
      {variant === 'default' ? 'Report Issue' : 'Issue'}
      <ExternalLink size={iconSize - 2} className="opacity-50" />
    </a>
  );
}
