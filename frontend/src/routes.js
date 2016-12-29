import React from 'react'
import { Route, IndexRoute } from 'react-router';
import { App } from 'frontend/src/components/App';
import { Home } from 'frontend/src/components/Home';
import { TestPanel } from 'frontend/src/containers/TestPanel';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home}/>
    {/* <Route path="groups" component={Groups} /> */}
    <Route path="test" component={TestPanel} />
  </Route>
)

export default routes;
