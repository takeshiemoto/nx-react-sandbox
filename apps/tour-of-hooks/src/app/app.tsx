import React from 'react';

import './app.css';

import { Route, Link } from 'react-router-dom';
import { UseRefLibrary } from '@nx-react-sandbox/use-ref-library';
import { ReactMemoLibrary } from '@nx-react-sandbox/react-memo-library';

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
    </div>
  );
};

export default App;
