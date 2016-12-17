import React from 'react'
import { Route, IndexRoute } from 'react-router';
import { App } from 'frontend/src/components/App';
import { Home } from 'frontend/src/components/Home';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home}/>
    {/* <Route path="groups" component={Groups} /> */}
  </Route>
)

export default routes;
