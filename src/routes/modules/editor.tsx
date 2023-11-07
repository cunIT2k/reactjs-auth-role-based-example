import React from 'react';
import { IRouter } from 'src/interfaces/IRoute';
import AppLayout from 'src/components/layout';
import EditorPage from 'src/pages/editor';

const EditorRoute: IRouter[] = [
  {
    element: <AppLayout />,
    children: [{ element: <EditorPage />, path: '/editor' }],
  },
];

export default EditorRoute;
