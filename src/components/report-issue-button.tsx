'use client';

import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';

interface ReportIssueButtonProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export function ReportIssueButton({ 
  className = '', 
  variant = 'default' 
}: ReportIssueButtonProps) {
  const pathname = usePathname();
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const fullUrl = useMemo(() => (origin && pathname ? `${origin}${pathname}` : ''), [origin, pathname]);

  const createIssueUrl = () => {
    const baseUrl = 'https://github.com/cps-acuo/travel-agent-docs/issues/new';
    const template = 'documentation-issue.yml';
    
  const params = new URLSearchParams();
  params.set('template', template);
  if (fullUrl) params.set('page-url', fullUrl);
  params.set('title', `[DOCS]: Issue on ${pathname}`);
  if (fullUrl) params.set('body', `Page URL: ${fullUrl}\n\nDescribe the issue here...`);

    return `${baseUrl}?${params.toString()}`;
  };

  const buttonClasses = variant === 'compact' 
    ? `inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md hover:bg-accent ${className}`
    : `inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-accent ${className}`;

  // Don't render the link until we have the URL to prevent hydration issues
  if (!origin) {
    return (
      <div className={buttonClasses}>
        🐛 {variant === 'default' ? 'Report Issue' : 'Issue'} ↗
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
      🐛 {variant === 'default' ? 'Report Issue' : 'Issue'} ↗
    </a>
  );
}
