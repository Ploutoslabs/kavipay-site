import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Waitlist from './pages/Waitlist';
import Product from './pages/Product';
import Company from './pages/Company';
import Partnership from './pages/Partnership';
import Resources from './pages/Resources';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import EULA from './pages/EULA';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import KnowledgeBase from './pages/KnowledgeBase';
import Contact from './pages/Contact';
import Status from './pages/Status';
import DeleteAccount from './pages/DeleteAccount';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/waitlist',
    Component: Waitlist,
  },
  {
    path: '/product',
    Component: Product,
  },
  {
    path: '/company',
    Component: Company,
  },
  {
    path: '/partnership',
    Component: Partnership,
  },
  {
    path: '/resources',
    Component: Resources,
  },
  {
    path: '/help',
    Component: HelpCenter,
  },
  {
    path: '/faq',
    Component: FAQ,
  },
  {
    path: '/knowledge-base',
    Component: KnowledgeBase,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/status',
    Component: Status,
  },
  {
    path: '/delete-account',
    Component: DeleteAccount,
  },
  {
    path: '/terms',
    Component: Terms,
  },
  {
    path: '/privacy-policy',
    Component: Privacy,
  },
  {
    path: '/cookies',
    Component: Cookies,
  },
  {
    path: '/eula',
    Component: EULA,
  },
]);
