import React from 'react';
// import { Match, Miss, Link } from 'react-router'
import { Match } from 'react-router';
import Router from 'react-router/BrowserRouter';
import { Home } from 'frontend/src/components/Home';
import { TestPanel } from 'frontend/src/containers/TestPanel';
import { Weather } from 'frontend/src/containers/Weather';
import { PixiTest } from 'frontend/src/containers/PixiTest';

const routes = (store, history) => (
  // basename config
  // <Router history={history} basename='/basename'>
  <Router history={history}>
    <div>
      <Match exactly pattern="/" component={Home}/>
      <Match pattern="/test" component={TestPanel} />
      <Match pattern="/weather" component={Weather} />
      <Match pattern="/pixitest" component={PixiTest} />
    </div>
  </Router>
)

export default routes
