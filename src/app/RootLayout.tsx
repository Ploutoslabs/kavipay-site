import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ComingSoonProvider } from './components/ComingSoonProvider';
import { SiteButton } from './components/SiteButton';

/**
 * Scrolls to `#section` targets after a client-side navigation.
 *
 * React Router does not restore hash targets on its own, so links like
 * `/#features` coming from a non-home page used to land at the top of the
 * page and appear broken.
 */
function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Wait a frame so the target section is mounted before we scroll to it.
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}

/**
 * Wraps every route so that:
 *  - any page can open the shared Coming Soon modal via `useComingSoon()`
 *  - the support chat widget is available site-wide, not just on the homepage
 *  - cross-page anchor links actually reach their section
 *
 * It sits inside the router, so the modal's "Notify Me" link can navigate
 * client-side to the waitlist.
 */
export default function RootLayout() {
  useHashScroll();

  return (
    <ComingSoonProvider>
      <Outlet />
      <SiteButton />
    </ComingSoonProvider>
  );
}
