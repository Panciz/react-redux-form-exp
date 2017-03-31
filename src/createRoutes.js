import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import * as containers from './containers';


const {
  CounterPage,
  MyFormPage,
  AnotherPage,
  NotFoundPage,
} = containers;

/**
 *  /
 *  /another
 **/
const createRoutes = store => ( // eslint-disable-line no-unused-vars
  <Route component={App}>
    <Route path="/" component={CounterPage} />
    <Route path="/form" component={MyFormPage} />
    <Route path="/another" component={AnotherPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default createRoutes;
