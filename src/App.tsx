import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router/Router';
import './shared/styles/global.scss';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
