# GitHub Issue Reporting System

This implementation adds comprehensive issue reporting capabilities to the Travel Agent documentation site.

## Components Created

### 1. GitHub Issue Template (`.github/ISSUE_TEMPLATE/documentation-issue.yml`)
- YAML-based GitHub issue form
- Pre-structured fields for documentation issues
- Automatic URL capture
- Product categorization
- Image upload support
- Code of conduct acceptance

### 2. React Components

#### `ReportIssueButton` (Basic)
- Simple button with emoji icons
- SSR-safe with useEffect for URL detection
- Compact and default variants

#### `ReportIssueButtonWithIcons` (Enhanced)
- Uses Lucide React icons (Bug, ExternalLink)
- Includes pathname detection
- SSR-safe implementation
- Better visual design

#### `SidebarFooter`
- Dedicated sidebar section for issue reporting
- Encourages user feedback
- Prominent placement in docs navigation

#### `PageFooter`
- Footer component for individual documentation pages
- "Was this helpful?" messaging
- Responsive design

### 3. Integration Points

#### Navigation Bar
- Added compact issue button to `layout.config.tsx`
- Always visible across all pages

#### Sidebar
- Added footer section to docs layout
- Persistent access in documentation area

#### MDX Components
- Registered components in `mdx-components.tsx`
- Available as `<ReportIssue />` and `<PageFooter />` in MDX files

## Usage

### In Navigation (Automatic)
The compact button appears automatically in the top navigation.

### In Sidebar (Automatic)  
The sidebar footer appears automatically in the docs layout.

### In MDX Content (Manual)
```mdx
<!-- Default button -->
<ReportIssue variant="default" />

<!-- Compact button -->
<ReportIssue variant="compact" />

<!-- Page footer with feedback section -->
<PageFooter />
```

## Technical Details

### SSR Compatibility
- Uses `useEffect` to set URL after hydration
- Renders disabled state until client-side URL is available
- Prevents hydration mismatches

### URL Generation
- Automatically captures current page URL
- Pre-fills GitHub issue template
- Includes page context in issue title

### GitHub Integration
- Links to `cps-acuo/travel-agent-docs` repository
- Uses `documentation-issue.yml` template
- Opens in new tab with pre-filled form

## Customization

### Styling
All components use Tailwind CSS classes that match the FumaDocs theme:
- `text-muted-foreground` for secondary text
- `hover:text-foreground` for hover states
- `border-border` for consistent borders
- `hover:bg-accent` for hover backgrounds

### Variants
- `default`: Full-size button with complete text
- `compact`: Smaller button for navigation areas

### Repository Configuration
Update the repository URL in the components if needed:
```typescript
const baseUrl = 'https://github.com/YOUR-ORG/YOUR-REPO/issues/new';
```

## Demo Page

Visit `/docs/issue-reporting-demo` to see all components in action and test the functionality.
