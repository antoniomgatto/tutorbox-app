import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteWithLayout } from 'components'
import {
  MainLayout
} from 'layouts'
import {
  Knowledges, KnowledgeView, VideoView, VideosView, LoginView
} from 'views';

const Routes = () => {
  return(
  <Switch>
    <Redirect
      exact
      path="/"
      to="/conhecimentos"
    />
    <Route
      path="/login"
      component={LoginView}
    />
    <RouteWithLayout
      exact
      path="/conhecimentos"
      component={Knowledges}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/conhecimento/novo"
      component={KnowledgeView}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/video/novo"
      component={VideoView}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/videos"
      component={VideosView}
      layout={MainLayout}
    />
  </Switch>
  )
};

export default Routes;
