import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './feature/DashBoard';
import Login from './feature/Login';
import Register from './feature/Register';
import { useRecoilState } from 'recoil';
import { loginState } from './recoil/appState';
function App() {
  const [login, setLogin] = useRecoilState(loginState);
  console.log('afdasdf', login)
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <DashBoard />
          </Route>
          <Route exact path='/courses'>
            <DashBoard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
