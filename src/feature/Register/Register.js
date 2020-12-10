import React from "react";
import "./Register.css";

const Register = (props) => {
  return (
    <div className="">
      <div className="container-login100">
        <div className="wrap-login100" style={{ justifyContent: "center" }}>
          <div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">Member Login</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid Account is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="Account"
                  placeholder="Account"
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
                <button className="login100-form-btn">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
