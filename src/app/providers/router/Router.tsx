import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Miniatures from '@/pages/Miniatures/Miniatures';
import Paints from '@/pages/Paints/Paints';
import Terrain from '@/pages/Terrain/Terrain';
import Modeling from '@/pages/Modeling/Modeling';
import Storage from '@/pages/Storage/Storage';
import Workshop from '@/pages/Workshop/Workshop';
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
        path: '/paints',
        element: <Paints />,
      },
      {
        path: '/terrain',
        element: <Terrain />,
      },
      {
        path: '/modeling',
        element: <Modeling />,
      },
      {
        path: '/storage',
        element: <Storage />,
      },
      {
        path: '/workshop',
        element: <Workshop />,
      },
      {
        path: '/admin',
        element: < Admin/>,
      },
    ],
  },
]); 