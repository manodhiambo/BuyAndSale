import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	  return (
		      <header>
		        <nav>
		          <h1>Buy & Sell App</h1>
		          <ul>
		            <li><Link to="/">Home</Link></li>
		            <li><Link to="/login">Login</Link></li>
		            <li><Link to="/register">Register</Link></li>
		            <li><Link to="/add-listing">Sell Item</Link></li>
		          </ul>
		        </nav>
		      </header>
		    );
}

export default Header;
