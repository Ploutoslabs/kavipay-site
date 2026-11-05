import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Waitlist from "./pages/Waitlist";
import Product from "./pages/Product";
import Company from "./pages/Company";
import Partnership from "./pages/Partnership";
import Resources from "./pages/Resources";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import EULA from "./pages/EULA";
import HelpCenter from "./pages/HelpCenter";
import FAQ from "./pages/FAQ";
import KnowledgeBase from "./pages/KnowledgeBase";
import Contact from "./pages/Contact";
import Status from "./pages/Status";
import DeleteAccount from "./pages/DeleteAccount";
import KavipayKYCPolicyPage from "./pages/KavipayKYCPolicyPage";
import SupportChat from "./pages/SupportChat";
import { appReferralUrl } from "./config/links";

// Referral links live on the web app. vercel.json redirects well-formed ones
// before the page loads; this covers client-side navigation, local dev and
// malformed codes, which go home.
const toAppReferral = (code: string | undefined) => redirect(appReferralUrl(code) ?? "/");

export const router = createBrowserRouter([
  // Outside RootLayout: that layout mounts the widget with its own bubble,
  // and this page loads it itself for the app to embed.
  { path: "/support-chat", Component: SupportChat },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "waitlist", Component: Waitlist },
      { path: "product", Component: Product },
      { path: "company", Component: Company },
      { path: "partnership", Component: Partnership },
      { path: "resources", Component: Resources },
      { path: "help", Component: HelpCenter },
      { path: "faq", Component: FAQ },
      { path: "knowledge-base", Component: KnowledgeBase },
      { path: "contact", Component: Contact },
      { path: "status", Component: Status },
      { path: "delete-account", Component: DeleteAccount },
      { path: "terms", Component: Terms },
      { path: "privacy-policy", Component: Privacy },
      { path: "cookies", Component: Cookies },
      { path: "eula", Component: EULA },
      { path: "referral/:code", loader: ({ params }) => toAppReferral(params.code) },
      { path: "referral", loader: () => redirect("/") },
      { path: "r/:slug", loader: ({ params }) => toAppReferral(params.slug) },
      { path: "kavipay-kyc-policy", Component: KavipayKYCPolicyPage },
    ],
  },
]);
