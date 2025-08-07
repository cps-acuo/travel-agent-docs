'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLayoutEffect, useState } from 'react';

const itemVariants = (active: boolean) => 
  `size-6.5 rounded-full p-1.5 ${
    active
      ? 'bg-fd-accent text-fd-accent-foreground'
      : 'text-fd-muted-foreground'
  }`;

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  const value = mounted ? resolvedTheme : null;

  return (
    <button
      className="inline-flex items-center rounded-full border p-1"
      aria-label="Toggle Theme"
      onClick={() => setTheme(value === 'light' ? 'dark' : 'light')}
      data-theme-toggle=""
    >
      <Sun
        fill="currentColor"
        className={itemVariants(value === 'light')}
      />
      <Moon
        fill="currentColor"
        className={itemVariants(value === 'dark')}
      />
    </button>
  );
}
