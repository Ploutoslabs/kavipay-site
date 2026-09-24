import * as DialogPrimitive from '@radix-ui/react-dialog';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Clock, X } from 'lucide-react';
import { Link } from 'react-router';

export interface ComingSoonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Name of the specific capability, shown as a chip above the title. */
  feature?: string;
  /** Overrides the default body copy when a surface needs more context. */
  message?: string;
}

const DEFAULT_MESSAGE =
  'This feature is currently under development and will be available in a future update.';

/**
 * The single modal shown whenever a user reaches for something we have not
 * shipped yet. Prefer opening it through `useComingSoon()` rather than
 * mounting this directly, so the whole site shares one instance.
 */
export function ComingSoonModal({
  open,
  onOpenChange,
  feature,
  message,
}: ComingSoonModalProps) {
  const reduceMotion = useReducedMotion();

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                className="fixed left-1/2 top-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Ambient glow, matching the card treatment used site-wide */}
                <div
                  className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] opacity-40 blur-xl"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08080A] p-8">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1476B8] to-transparent"
                    aria-hidden="true"
                  />

                  <DialogPrimitive.Close
                    className="absolute right-4 top-4 rounded-full p-2 text-white/40 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
                    aria-label="Close dialog"
                  >
                    <X className="h-4 w-4" />
                  </DialogPrimitive.Close>

                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E63C6] via-[#1476B8] to-[#0F8A8C]">
                    <Clock className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>

                  {feature && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#7BB8E8]">
                      {feature}
                    </p>
                  )}

                  <DialogPrimitive.Title className="mb-3 text-2xl font-bold text-white">
                    Coming Soon
                  </DialogPrimitive.Title>

                  <DialogPrimitive.Description className="mb-8 leading-relaxed text-white/60">
                    {message ?? DEFAULT_MESSAGE}
                  </DialogPrimitive.Description>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row">
                    <DialogPrimitive.Close className="flex-1 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]">
                      Close
                    </DialogPrimitive.Close>

                    <Link
                      to="/waitlist"
                      onClick={() => onOpenChange(false)}
                      className="flex-1 rounded-full bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] px-6 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7BB8E8]"
                    >
                      Notify Me
                    </Link>
                  </div>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
