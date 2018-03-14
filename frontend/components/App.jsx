import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div className='mainDiv'>
    <header>
      <h1>FindMyDog</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
