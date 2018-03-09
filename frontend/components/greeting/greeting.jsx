import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-page-nav">

    <section className="login-signup">
      <Link to="/login" className="login_signup_links">Login</Link>
      <Link to="/signup" className="login_signup_links">Sign up</Link>
    </section>

  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group" >

	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
