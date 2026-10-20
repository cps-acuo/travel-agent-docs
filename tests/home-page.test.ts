import { beforeEach, describe, expect, it, vi } from 'vitest';

const { redirect } = vi.hoisted(() => ({
  redirect: vi.fn(),
}));

vi.mock('next/navigation', () => ({ redirect }));

import HomePage from '../src/app/(home)/page';

describe('home page', () => {
  beforeEach(() => {
    redirect.mockClear();
  });

  it('redirects visitors to the documentation', () => {
    HomePage();

    expect(redirect).toHaveBeenCalledWith('/docs');
  });
});
