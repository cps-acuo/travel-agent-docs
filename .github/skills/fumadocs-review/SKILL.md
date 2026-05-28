---
name: fumadocs-review
description: "Systematically review and validate FumaDocs .mdx files for structure, conventions, and best practices. Use when: reviewing documentation files, creating new .mdx pages, checking for FumaDocs compliance, identifying unused imports, validating navigation patterns, ensuring consistent formatting and metadata."
---

# FumaDocs Documentation Review Skill

This skill provides a structured approach for reviewing MDX documentation files in the travel-agent-docs project using FumaDocs conventions.

## When to Use

Invoke this skill when you need to:

- Review existing documentation files for quality and compliance
- Create new .mdx pages that follow project standards
- Audit front matter (title, description, slug, icon)
- Check for proper use of FumaDocs components
- Validate navigation and card linking patterns
- Identify unused imports and cleanup opportunities
- Ensure consistency across documentation sections

## Review Checklist

### Front Matter (YAML)

- [ ] `title` field is present and descriptive
- [ ] `description` field concisely summarizes the page (50-100 characters)
- [ ] `slug` field is present (if needed for custom routing)
- [ ] `icon` field uses valid FumaDocs icon name (if applicable)

### Imports

- [ ] All imported components are used somewhere in the file
- [ ] Remove unused imports (e.g., `InlineTOC` if no table of contents)
- [ ] Only import from `fumadocs-ui/components/` or project-local components

### Content Structure

- [ ] Proper heading hierarchy (`# → ## → ###`, no skipped levels)
- [ ] Clear introductory paragraph explaining the page purpose
- [ ] Logical flow from concept to implementation/examples
- [ ] All sections are substantive (no empty or placeholder sections)

### FumaDocs Components

- [ ] `<Card>` and `<Cards>` are used for navigation/feature highlights
- [ ] `<Steps>` component for sequential processes (setup, getting started)
- [ ] `<Tabs>` for multi-version content if applicable
- [ ] All component props have correct href paths (relative, not absolute)
- [ ] Navigation links use `./relative-path` format within the same section

### Navigation & Links

- [ ] Card `href` attributes use relative paths without `/docs/` prefix
- [ ] Links point to files that actually exist
- [ ] Breadcrumb navigation is logical (nested sections map to folder structure)
- [ ] Cross-references between sections are consistent

### Code & Examples

- [ ] Code blocks have proper syntax highlighting (language specified)
- [ ] Examples are relevant and tested
- [ ] Sensitive information (API keys, passwords) is not included

### Images

- [ ] Images are stored in correct `public/images/` subfolder
- [ ] Image paths use relative references from content location
- [ ] Alt text is descriptive
- [ ] Images are optimized (reasonable file size)

### Consistency & Polish

- [ ] Grammar, spelling, and punctuation are correct
- [ ] Terminology matches glossary and other documentation
- [ ] Tone is professional and audience-appropriate (business users)
- [ ] No redundant or outdated information

## Common Issues & Fixes

| Issue                                           | Fix                                                             |
| ----------------------------------------------- | --------------------------------------------------------------- |
| Imported component not used (e.g., `InlineTOC`) | Remove the import statement                                     |
| Card links include `/docs/` prefix              | Change `./docs/travel-agent` → `./travel-agent`                 |
| Missing or vague page description               | Add a 50-100 character `description` in front matter            |
| Broken relative links                           | Use `./page-name` for siblings, `../parent/child` for traversal |
| Unused or empty sections                        | Remove sections with no substantive content                     |
| Incorrect heading hierarchy                     | Ensure `# → ## → ###` progression, no skipped levels            |

## Example: Good Structure

```mdx
---
title: Travel Bookings
description: Manage all aspects of package bookings and track individual bookings.
---

import { Card, Cards } from "fumadocs-ui/components/card";
import { Step, Steps } from "fumadocs-ui/components/steps";

# Travel Bookings

Introductory paragraph explaining the purpose of this section.

<Steps>
  <Step>## Purpose Clear statement of what Travel Bookings covers.</Step>
  <Step>
    ## Getting Started Step-by-step guide with links to related pages.
  </Step>
</Steps>

## Key Features

<Cards>
  <Card href="./travel-bookings" title="..." description="..." />
</Cards>
```

## FumaDocs Resources

- [Page Conventions](https://fumadocs.dev/docs/ui/page-conventions)
- [Markdown Features](https://fumadocs.dev/docs/ui/markdown)
- [Navigation & Links](https://fumadocs.dev/docs/ui/navigation/links)
- [Sidebar Configuration](https://fumadocs.dev/docs/ui/navigation/sidebar)

## Reference Files

When reviewing or creating documentation, consult these project reference files for accurate field names, table structures, and option set values:

- **Database schema**: `Doc/database.md` — Dataverse table definitions, column names, data types, and lookup relationships
- **Option sets**: `Doc/optionsets.md` — Dataverse option set (enum) values and labels used across the application

Read these files to validate that documentation accurately references database fields, table names, and option set values.

## Project-Specific Guidelines

This project serves **business users** as a **training guide**:

- Use clear, non-technical language where possible
- Include step-by-step instructions with screenshots when relevant
- Organize content by workflow and user role
- Link to related setup and configuration topics
- Keep examples practical and task-oriented
