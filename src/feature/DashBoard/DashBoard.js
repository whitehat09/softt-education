<<<<<<< HEAD
import React from "react";
import { Route, Switch } from "react-router-dom";
import Courses from "../Cousers";
import Home from "../Home";
import Login from "../Login";
import Footer from "./Footer";
import Menu from "./Menu";
import Register from "../Register";
import CoursesDetail from "../CoursesDetail";
=======
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Courses from '../Cousers';
import Home from '../Home';
import Login from '../Login';
import Footer from './Footer';
import Menu from './Menu';
>>>>>>> dd5d4aa061e7de930e2f283327071ac6c37b466f

function DashBoard(props) {
  return (
    <div>
      <Menu />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/courses'>
          <Courses />
        </Route>
        <Route path="/courses/detail">
          <CoursesDetail />
        </Route>
        <Route path="/detail">
          <CoursesDetail />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default DashBoard;
