import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Courses from '../Cousers';
import Home from '../Home';
import Menu from './Menu';
function DashBoard(props) {
  return (
    <div>
      <Menu />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/courses'>
          <Courses />
        </Route>
      </Switch>
    </div>
  );
}

export default DashBoard;
