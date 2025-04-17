import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Miniatures from '@/pages/Miniatures/Miniatures';
import PiantsAndTools from '@/pages/PaintsAndTools/PaintsAndTools';
import Portfolio from '@/pages/Portfolio/Portfolio';
import Books from '@/pages/Books/Books';
import Gallery from '@/pages/Gallery/Gallery';
import ContactForm from '@/pages/ContactForm/ContactForm';
import { Layout } from '@/widgets/Layout';
import Admin from '@/pages/Admin/Admin';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/miniatures',
        element: <Miniatures />,
      },
      {
        path: '/piantsandtools',
        element: <PiantsAndTools />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contactform',
        element: <ContactForm />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },

    ],
  },
]); 