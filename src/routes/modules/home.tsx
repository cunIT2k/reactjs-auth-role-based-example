import React from 'react';
import { IRouter } from 'src/interfaces/IRoute';
import AppLayout from 'src/components/layout';
import HomePage from 'src/pages/home';

const HomeRoute: IRouter[] = [
  {
    element: <AppLayout />,
    children: [{ element: <HomePage />, path: '/' }],
  },
];

export default HomeRoute;
