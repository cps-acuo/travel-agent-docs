import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Cache forever for static export
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
