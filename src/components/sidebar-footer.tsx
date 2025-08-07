import { ReportIssueButtonWithIcons } from './report-issue-button-with-icons';
import { ThemeToggle } from './theme-toggle';

export function SidebarFooter() {
  return (
    <div className="flex items-center border-border">
      <div className="flex-1">
        <ReportIssueButtonWithIcons variant="compact" className="w-full justify-center" />
      </div>
      <div className="flex items-center justify-end flex-1">
        <ThemeToggle />
      </div>
    </div>
  );
}
