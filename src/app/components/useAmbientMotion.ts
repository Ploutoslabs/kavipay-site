import { useRef } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

/**
 * Gate for decorative, endlessly looping background motion.
 *
 * Infinite animations keep the compositor busy even when their section is
 * scrolled far out of view, and the homepage runs dozens of them. Attach the
 * returned ref to the section's background container and only animate while
 * `active` is true: the section is on (or near) screen and the visitor has not
 * asked for reduced motion.
 */
export function useAmbientMotion<T extends Element = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: '200px 0px' });
  const reduceMotion = useReducedMotion();

  return { ref, active: inView && !reduceMotion };
}
