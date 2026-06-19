# GitHub Copilot Instructions

## Project Purpose

This repository is a FumaDocs documentation site for three products:

- Travel Agent operations
- Travel Agent WordPress
- Travel Agent Web Bookings

Primary audience: business users.
Primary goal: task-oriented training documentation.

## Working Rules For Agents

- Prefer updating the existing documentation tree over creating parallel pages.
- Keep content grounded in the repo's source material. Do not invent product behavior, field names, or option values.
- Link to existing reference docs instead of copying their contents.
- Keep language clear and non-technical unless the page is explicitly technical.

## Commands

- Use `pnpm dev` to run the local site.
- Use `pnpm build` to validate documentation and site changes.
- Use `pnpm start` to serve the production build.
- Node.js `>= 20` is required.

There is no dedicated test script in `package.json`. For verification, prefer `pnpm build` plus editor diagnostics.

## Key Files And Ownership

- [README.md](../README.md): generic project overview and local dev entry point.
- [source.config.ts](../source.config.ts): FumaDocs MDX and `meta.json` schema configuration.
- [next.config.mjs](../next.config.mjs): static export config and unoptimized public images.
- [src/lib/source.ts](../src/lib/source.ts): docs loader, `/docs` base URL, and Lucide icon resolution.
- [src/app/layout.config.tsx](../src/app/layout.config.tsx): shared docs layout configuration.
- [src/mdx-components.tsx](../src/mdx-components.tsx): project MDX components available to pages.
- [content/docs/meta.json](../content/docs/meta.json): top-level docs navigation.
- `content/docs/**/meta.json`: section-level navigation order and icons.
- [Doc/database.md](../Doc/database.md): database schema reference.
- [Doc/optionsets.md](../Doc/optionsets.md): option set and enum reference.

Do not edit the generated `@/.source` output manually. It is produced by `fumadocs-mdx`.

## Content Structure

- Put pages in the correct product subtree under `content/docs/`:
  - `travel-agent/`
  - `travel-agent-wordpress/`
  - `travel-agent-web-bookings/`
- When adding, removing, or reordering pages, update the nearest `meta.json` so navigation stays correct.
- Root navigation is controlled by [content/docs/meta.json](../content/docs/meta.json).

## MDX Conventions

- Use frontmatter with at least `title` and `description`.
- Use `icon` only when the name is a valid Lucide icon; invalid names will not resolve in [src/lib/source.ts](../src/lib/source.ts).
- Keep heading order strict: `#` to `##` to `###` without skipping levels.
- Prefer relative internal links such as `./page-name` within a section.
- Store screenshots in the matching `public/images/<product>/` subtree and reference them from `/images/...` paths.
- Use the components exposed through [src/mdx-components.tsx](../src/mdx-components.tsx): images are zoom-enabled automatically, and `ReportIssue` and `PageFooter` are available to MDX pages.

## Reference-First Authoring

Before documenting schema, field names, or option values, check:

- [Doc/database.md](../Doc/database.md)
- [Doc/optionsets.md](../Doc/optionsets.md)

Do not duplicate large reference tables into end-user documentation unless the page specifically needs a reduced, task-focused subset.

## Review Guidance

When creating or reviewing `.mdx` pages, use the existing skill at [.github/skills/fumadocs-review/SKILL.md](../.github/skills/fumadocs-review/SKILL.md). It captures the project's MDX review checklist, navigation rules, and common content mistakes.

## External References

- [FumaDocs Page Conventions](https://fumadocs.dev/docs/ui/page-conventions)
- [FumaDocs Markdown](https://fumadocs.dev/docs/ui/markdown)
- [FumaDocs Navigation Links](https://fumadocs.dev/docs/ui/navigation/links)
- [FumaDocs Sidebar](https://fumadocs.dev/docs/ui/navigation/sidebar)

## Commit Messages

If asked to prepare a commit message, use Conventional Commits.
