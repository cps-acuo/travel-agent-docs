import { ImageZoom, type ImageZoomProps } from 'fumadocs-ui/components/image-zoom';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { ReportIssueButtonWithIcons } from '@/components/report-issue-button-with-icons';
import { PageFooter } from '@/components/page-footer';

type StaticImageSource = Exclude<ImageZoomProps['src'], string | undefined>;

function isStaticImageSource(source: unknown): source is StaticImageSource {
  const image =
    typeof source === 'object' && source !== null && 'default' in source
      ? source.default
      : source;

  return (
    typeof image === 'object' &&
    image !== null &&
    'src' in image &&
    typeof image.src === 'string' &&
    'width' in image &&
    typeof image.width === 'number' &&
    'height' in image &&
    typeof image.height === 'number'
  );
}

function normalizeImageSource(source: unknown): ImageZoomProps['src'] {
  if (source === undefined || typeof source === 'string' || isStaticImageSource(source)) {
    return source;
  }

  throw new TypeError('MDX image sources must be URL strings or static image imports.');
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    img: ({ src, ...props }) => <ImageZoom {...props} src={normalizeImageSource(src)} />,
    ReportIssue: ReportIssueButtonWithIcons,
    PageFooter: PageFooter,
    ...components,
  };
}
