import React from 'react';
import AuthProvider from './auth-provider';
import logo from './logo.svg';
import './App.css';
import Login from "./login";

const App = () => {
  return (
	<div className="App">
	<header className="App-header">
	 Rezingo Web 
	  
	  <Login/>
	</header>
  </div>
  );
};

export default AuthProvider(App);