import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ComingSoonModal } from './ComingSoonModal';

interface ComingSoonOptions {
  /** Name of the capability, e.g. "Global Acceptance". */
  feature?: string;
  /** Overrides the default body copy. */
  message?: string;
}

interface ComingSoonContextValue {
  /** Opens the shared Coming Soon modal. */
  openComingSoon: (options?: ComingSoonOptions) => void;
}

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

/**
 * Opens the site-wide Coming Soon modal.
 *
 * Use this for any control that would otherwise lead nowhere, so we never ship
 * a dead button:
 *
 *   const { openComingSoon } = useComingSoon();
 *   <button onClick={() => openComingSoon({ feature: 'Public API' })}>…</button>
 */
export function useComingSoon(): ComingSoonContextValue {
  const context = useContext(ComingSoonContext);
  if (!context) {
    throw new Error('useComingSoon must be used within a ComingSoonProvider');
  }
  return context;
}

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ComingSoonOptions>({});

  const openComingSoon = useCallback((next: ComingSoonOptions = {}) => {
    setOptions(next);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openComingSoon }), [openComingSoon]);

  return (
    <ComingSoonContext.Provider value={value}>
      {children}
      <ComingSoonModal
        open={open}
        onOpenChange={setOpen}
        feature={options.feature}
        message={options.message}
      />
    </ComingSoonContext.Provider>
  );
}
