import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Provider, Redirect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';


const App = () => (
  <div className='mainDiv'>
    <header>
      <h1>FindMyDog</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
