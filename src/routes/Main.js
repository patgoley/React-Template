// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

const Home = () => (<div>Home</div>)

export default () => (
  <main>
    <Switch>
      <Route path='/' component={Home}/>
    </Switch>
  </main>
)
