import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Courses from '../Cousers';
import Home from '../Home';
import Login from '../Login';
import Footer from './Footer';
import Menu from './Menu';
import Register from '../Register';
import CoursesDetail from '../CousersDetail';

function DashBoard(props) {
  return (
    <div>
      <div style={{}} >
      <Menu />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/courses'>
            <Courses />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route path='/courses/:id'>
            <CoursesDetail />
          </Route>
        </Switch>
      </div>
      <div>
      <Footer />
      </div>
      
    </div>
  );
}

export default DashBoard;
