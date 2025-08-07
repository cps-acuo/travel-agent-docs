'use client';

import { ReportIssueButtonWithIcons } from './report-issue-button-with-icons';

export function PageFooter() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 mt-12 border-border">
      <div className="text-sm text-muted-foreground">
        Was this page helpful?
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <span className="text-sm text-muted-foreground">
          Found an issue with this page?
        </span>
        <ReportIssueButtonWithIcons variant="compact" />
      </div>
    </div>
  );
}
