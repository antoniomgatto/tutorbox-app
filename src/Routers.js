import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from 'components'
import {
  MainLayout,
  Unrestrict as UnrestrictLayout,
} from 'layouts'
import {
  Knowledges,
  KnowledgeView,
  VideoView,
  VideosView,
  VideoReview as VideoReviewView,
  Authentication as AuthenticationView,
  NewPassword as NewPasswordView,
  RecoveryPassword as RecoveryPasswordView,
} from "views";

const Routes = () => {
  return(
  <Switch>
    <Redirect
      exact
      path="/"
      to="/conhecimentos"
    />
    <RouteWithLayout
      path="/auth"
      component={AuthenticationView}
      layout={UnrestrictLayout}
    />
    <RouteWithLayout
      path="/recuperar-senha"
      component={RecoveryPasswordView}
      layout={UnrestrictLayout}
    />
    <RouteWithLayout
      path="/nova-senha/:token"
      component={NewPasswordView}
      layout={UnrestrictLayout}
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
      path="/video/revisao"
      component={VideoReviewView}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/video/ajustes"
      component={VideoReviewView}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/video/:status"
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
