import React from 'react';
import { IRouter } from 'src/interfaces/IRoute';
import AppLayout from 'src/components/layout';
import PageNotFound from 'src/pages/errors/404';

const PageNotFoundRoute: IRouter[] = [
  {
    element: <AppLayout />,
    children: [{ element: <PageNotFound />, path: '*' }],
  },
];

export default PageNotFoundRoute;
