import React from 'react';
import { IRouter } from 'src/interfaces/IRoute';
import AppLayout from 'src/components/layout';
import LoginPage from 'src/pages/auth/login';

const LoginRoute: IRouter[] = [
  {
    element: <AppLayout />,
    children: [{ element: <LoginPage />, path: '/login' }],
  },
];

export default LoginRoute;
