'use client';

import { Bug, ExternalLink } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

interface ReportIssueButtonProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export function ReportIssueButtonWithIcons({ 
  className = '', 
  variant = 'default' 
}: ReportIssueButtonProps): ReactElement {
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
  const createIssueUrl = () => {
    const baseUrl = 'https://github.com/cps-acuo/travel-agent-docs/issues/new';
    const template = 'documentation-issue.yml';
    
    const params = new URLSearchParams({
      template,
      'page-url': currentUrl,
      title: `[DOCS]: Issue on ${pathname}`,
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const buttonClasses = variant === 'compact' 
    ? `inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md hover:bg-accent ${className}`
    : `inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-accent ${className}`;

  const iconSize = variant === 'compact' ? 14 : 16;

  // Don't render the link until we have the URL to prevent hydration issues
  if (!currentUrl) {
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
