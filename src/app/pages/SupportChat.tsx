import { useEffect } from 'react';
import { SiteButton } from '../components/SiteButton';

/**
 * Chat-only page that the KaviPay web app embeds in an iframe.
 *
 * The CRM widget script gets full access to whatever document loads it, so
 * the app never loads it directly: it frames this page instead, which keeps
 * the widget on this origin and away from the app's session. The app draws
 * its own chat bubble, so the widget's bubble is hidden here and the chat
 * opens as soon as it is ready.
 */

export const SUPPORT_CHAT_CLOSE_MESSAGE = 'kavipay:support-chat:close';

interface LiveChatWidget {
  open: () => void;
  subscribe: (subscription: { type: string; callback: () => void }) => void;
}

declare global {
  interface Window {
    BX?: { LiveChatWidget?: { SubscriptionType?: { widgetClose?: string } } };
  }
}

export default function SupportChat() {
  useEffect(() => {
    const onWidgetReady = (event: Event) => {
      const { widget } = (event as CustomEvent<{ widget: LiveChatWidget }>).detail;
      const widgetClose = window.BX?.LiveChatWidget?.SubscriptionType?.widgetClose;

      if (widgetClose) {
        widget.subscribe({
          type: widgetClose,
          // The payload carries nothing sensitive, so any embedding origin
          // may receive it; the app checks the sender's origin on its side.
          callback: () =>
            window.parent.postMessage({ type: SUPPORT_CHAT_CLOSE_MESSAGE }, '*'),
        });
      }
      widget.open();
    };

    window.addEventListener('onBitrixLiveChat', onWidgetReady);
    return () => window.removeEventListener('onBitrixLiveChat', onWidgetReady);
  }, []);

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
      `}</style>
      <SiteButton />
    </>
  );
}
