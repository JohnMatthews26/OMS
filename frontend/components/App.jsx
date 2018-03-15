import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Provider, Redirect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div className='mainDiv'>
    <header>
      <h1>FindMyDog</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
