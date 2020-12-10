import React from "react";
import "./login.css";

const Login = (props) => {
  return (
    <div className="login">
      <div className="container-login100">
        <div className="wrap-login100" style={{ justifyContent: "center" }}>
          <div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">Member Login</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>

              <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Create your Account
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
