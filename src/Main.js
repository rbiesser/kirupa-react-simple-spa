import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/" component={Home}/>
            </Switch>
              
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;