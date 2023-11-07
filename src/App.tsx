/* eslint-disable react/no-children-prop */
import React from 'react';
import './styles/index.less';
import AppRoute from './routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter([...AppRoute]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
