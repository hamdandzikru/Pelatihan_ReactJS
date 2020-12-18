// import React, { Component } from 'react'; 
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
// import Home from './Home'; 
// import About from './About'; 
// import Contact from './Contact'; 
// import './App.css'; 
  
// class App extends Component { 
//   render() { 
//     return ( 
//        <Router> 
//            <div className="App"> 
//             <ul className="App-header"> 
//               <li> 
//                 <Link to="/">Home</Link> 
//               </li> 
//               <li> 
//                 <Link to="/about">About Us</Link> 
//               </li> 
//               <li> 
//                 <Link to="/contact">Contact Us</Link> 
//               </li> 
//             </ul> 
//             <Switch> 
//               <Route exact path='/' component={Home}></Route> 
//               <Route exact path='/about' component={About}></Route> 
//               <Route exact path='/contact' component={Contact}></Route> 
//             </Switch> 
//           </div> 
//        </Router> 
//    ); 
//   } 
// } 
  
// export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
   
}
}

export default MyHeader;