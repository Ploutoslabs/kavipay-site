import { useEffect } from 'react';
import { SiteButton } from '../components/SiteButton';

/**
 * Support page that the KaviPay apps embed: an iframe on web, a WebView on mobile.
 *
 * The CRM widget script gets full access to whatever document loads it, so the
 * apps never load it directly: they embed this page instead, which keeps the
 * widget on this origin and away from the app's session. The apps draw their
 * own entry points, so the widget's bubble is hidden here and the requested
 * channel opens as soon as it is ready:
 *
 *   /support-chat               live chat
 *   /support-chat?channel=form  the "leave your contact info" form
 */

export const SUPPORT_CHAT_CLOSE_MESSAGE = 'kavipay:support-chat:close';

const FORM_WIDGET_ID = 'crmform';
const POLL_MS = 250;

interface LiveChatWidget {
  open: () => void;
  subscribe: (subscription: { type: string; callback: () => void }) => void;
}

interface SiteButtonWidgetManager {
  showById: (id: string) => void;
  showedWidget: { id: string } | null;
}

declare global {
  interface Window {
    BX?: {
      LiveChatWidget?: { SubscriptionType?: { widgetClose?: string } };
      SiteButton?: { wm?: SiteButtonWidgetManager };
    };
    ReactNativeWebView?: { postMessage: (message: string) => void };
  }
}

// The payload carries nothing sensitive, so any embedding origin may receive
// it; the app checks the sender's origin on its side.
function notifyClosed() {
  const message = { type: SUPPORT_CHAT_CLOSE_MESSAGE };
  window.parent.postMessage(message, '*');
  window.ReactNativeWebView?.postMessage(JSON.stringify(message));
}

function openLiveChat() {
  const onWidgetReady = (event: Event) => {
    const { widget } = (event as CustomEvent<{ widget: LiveChatWidget }>).detail;
    const widgetClose = window.BX?.LiveChatWidget?.SubscriptionType?.widgetClose;

    if (widgetClose) {
      widget.subscribe({ type: widgetClose, callback: notifyClosed });
    }
    widget.open();
  };

  window.addEventListener('onBitrixLiveChat', onWidgetReady);
  return () => window.removeEventListener('onBitrixLiveChat', onWidgetReady);
}

/**
 * The form widget has no close event of its own, so this watches the site
 * button's widget manager: the form is open while it is the shown widget, and
 * closed once nothing is.
 */
function openContactForm() {
  let formShown = false;

  const timer = window.setInterval(() => {
    const wm = window.BX?.SiteButton?.wm;
    if (!wm) return;

    if (!formShown) {
      wm.showById(FORM_WIDGET_ID);
      formShown = wm.showedWidget?.id === FORM_WIDGET_ID;
    } else if (!wm.showedWidget) {
      window.clearInterval(timer);
      notifyClosed();
    }
  }, POLL_MS);

  return () => window.clearInterval(timer);
}

export default function SupportChat() {
  const isForm = new URLSearchParams(window.location.search).get('channel') === 'form';

  useEffect(() => (isForm ? openContactForm() : openLiveChat()), [isForm]);

  return (
    <>
      <style>{`
        html, body { background: transparent !important; }
        .b24-widget-button-wrapper { display: none !important; }
        .bx-livechat-wrapper {
          inset: 0 !important;
          width: auto !important;
          height: auto !important;
          max-width: none !important;
          max-height: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        ${
          // An open conversation restores itself on load; keep it off the form.
          isForm ? '.bx-livechat-wrapper { display: none !important; }' : ''
        }
      `}</style>
      <SiteButton />
    </>
  );
}
