import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import DashBoard from "./feature/DashBoard";
import Login from "./feature/Login";
import Register from "./feature/Register";
import { loginState } from "./recoil/appState";
function App() {
  const [login, setLogin] = useRecoilState(loginState);
  useEffect(() => {
    const accessToken =
      sessionStorage.getItem("accessToken") ||
      localStorage.getItem("accessToken");
    if (accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route exact path="/courses">
            <DashBoard />
          </Route>
          <Route exact path="/courses/:id">
            <DashBoard />
          </Route>
          <Route exact path="/courses/:id/lessons">
            <DashBoard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/refill-coin">
            <DashBoard />
          </Route>
        </Switch>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
