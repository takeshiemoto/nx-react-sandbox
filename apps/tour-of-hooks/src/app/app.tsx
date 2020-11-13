import React from 'react';

import './app.css';

import { Route, Link } from 'react-router-dom';
import { UseRefLibrary } from '@nx-react-sandbox/use-ref-library';
import { ReactMemoLibrary } from '@nx-react-sandbox/react-memo-library';
import CustomHooks from './screens/CustomHooks';

type RouteType = {
  path: string;
  name?: string;
};

const ROUTES: RouteType[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: 'use-ref',
    name: 'useRef Example',
  },
  {
    path: 'react-memo',
    name: 'React.Memo Example',
  },
  {
    path: 'custom-hooks',
    name: 'Custom Hooks',
  },
];

export const App = () => {
  return (
    <div className="app">
      <div role="navigation">
        <ul>
          {ROUTES.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Route path={'/use-ref'} exact>
        <UseRefLibrary />
      </Route>
      <Route path={'/react-memo'} exact>
        <ReactMemoLibrary />
      </Route>
      <Route path={'/custom-hooks'} exact>
        <CustomHooks />
      </Route>
    </div>
  );
};

export default App;
