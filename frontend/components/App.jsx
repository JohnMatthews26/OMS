import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import MapContainer from './map/map_container';
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
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>

    <Switch>
      <ProtectedRoute path="/" component={MapContainer} />
    </Switch>
  </div>
);

export default App;
