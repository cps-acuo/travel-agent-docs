'use client';

import { useEffect, useState } from 'react';

interface ReportIssueButtonProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export function ReportIssueButton({ 
  className = '', 
  variant = 'default' 
}: ReportIssueButtonProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const createIssueUrl = () => {
    const baseUrl = GITHUB_ISSUE_BASE_URL;
    const template = 'documentation-issue.yml';
    
    const params = new URLSearchParams({
      template,
      'page-url': currentUrl,
      title: `[DOCS]: Documentation Issue`,
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const buttonClasses = variant === 'compact' 
    ? `inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md hover:bg-accent ${className}`
    : `inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-accent ${className}`;

  // Don't render the link until we have the URL to prevent hydration issues
  if (!currentUrl) {
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
