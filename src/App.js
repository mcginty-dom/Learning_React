import React from 'react';
import HelloWorld from './Components/HelloWorld'
import HelloWorldAlt from './Components/HelloWorldAlt'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Reducer from './Components/Reducer'
import ShoppingList from './Components/ShoppingList'
import './index.css';

//Stateless/functional component
function App() {
  //returns html and js if {}, must be wrapped by only 1
  return (
    <div classname="App">
      {
      //Props are used to pass information between components
      //<HelloWorld name="Test" />
      //<HelloWorldAlt name="TestTwo" />
      }
      <Router>
        <Header />
      </Router>
      <CounterExample />
      <ShoppingList />
      <Login />
      <Footer />
    </div>
  );
}

//used by another file (index.js)
export default App;
