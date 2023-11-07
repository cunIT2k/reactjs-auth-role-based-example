import React from 'react';
import { IRouter } from 'src/interfaces/IRoute';
import AppLayout from 'src/components/layout';
import AdminPage from 'src/pages/admin';

const AdminRoute: IRouter[] = [
  {
    element: <AppLayout />,
    children: [{ element: <AdminPage />, path: '/admin' }],
  },
];

export default AdminRoute;
