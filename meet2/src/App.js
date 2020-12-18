import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './component/home.js'; 
import About from './component/about.js'; 
import Contact from './component/contact.js';
import './App.css';
 
  
class App extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/about">About Us</Link> 
              </li> 
              <li> 
                <Link to="/contact">Contact Us</Link> 
              </li> 
            </ul> 
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App;