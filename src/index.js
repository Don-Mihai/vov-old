import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Preview from './pages/Preview/Preview';
import Main from './pages/Main/Main';
import RussianEquip from './pages/RussianEquip/RussianEquip';
import ForeignEquip from './pages/ForeignEquip/ForeignEquip';
import RussianItem from './pages/RussianItem/RussianItem';
import Bottom from './components/Bottom/Bottom';
import Hidden from './components/Hidden/Hidden';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Preview />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/russian-equip',
    element: <RussianEquip />,
  },
  {
    path: '/foreign-equip',
    element: <ForeignEquip />,
  },
  {
    path: '/russian-item/:id/:tab',
    element: <RussianItem />,
  },
  {
    path: '/foreign-item/:id/:tab',
    element: <RussianItem />,
  },
  {
    path: '/hidden',
    element: <Hidden />,
  },
]);
root.render(<RouterProvider router={router} />);
