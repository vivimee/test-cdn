/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';

import Loading from '../components/Loading';

const options = {
  loading: Loading,
};

const Homepage = Loadable({
  ...options,
  loader: () => import(/* webpackChunkName: "home-page" */'../containers/Homepage'),
});
const Detailpage = Loadable({
  ...options,
  loader: () => import(/* webpackChunkName: "detail-page" */'../containers/Detailpage'),
});

const NotFound = () => (<h4>page not found</h4>);

const createRoutes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/detail" component={Detailpage} />
    <Route component={NotFound} />
  </Switch>
);

export default createRoutes;
