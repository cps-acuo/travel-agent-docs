import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { ReportIssueButtonWithIcons } from '@/components/report-issue-button-with-icons';
import { PageFooter } from '@/components/page-footer';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    img: (props) => <ImageZoom {...props} />,
    ReportIssue: ReportIssueButtonWithIcons,
    PageFooter: PageFooter,
    ...components,
  };
}
