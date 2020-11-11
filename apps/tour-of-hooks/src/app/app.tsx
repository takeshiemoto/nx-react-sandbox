import React from 'react';

import './app.css';

import { Route, Link } from 'react-router-dom';
import { UseRefLibrary } from '@nx-react-sandbox/use-ref-library';

export const App = () => {
  return (
    <div className="app">
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route path={'/'} exact>
        <UseRefLibrary />
      </Route>
    </div>
  );
};

export default App;
