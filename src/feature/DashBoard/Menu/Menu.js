import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../../recoil/appState";

import "./Menu.css";

function Menu(props) {
  // const user = JSON.parse(
  //   sessionStorage.getItem('user') || localStorage.getItem('user')
  // );
  const user = JSON.parse(
    sessionStorage.getItem("user") || localStorage.getItem("user") || "{}"
  );

  const [login, setLogin] = useRecoilState(loginState);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");
    setLogin(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <span style={{ color: "#fe4e00" }}>Softt</span> education
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">
                  Khoá học
                </NavLink>
              </li>
              <li
                className="nav-item dropdown"
                style={{ display: login && user ? "block" : "none" }}
              >
                <span
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={user.avatar}
                    alt=""
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                  {user.name}
                </span>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ color: "#909090" }}
                >
                  <NavLink className="dropdown-item" to="/me/courses">
                    Khoá học của tôi
                  </NavLink>
                  <NavLink className="dropdown-item" to="/refill-coin">
                    Nạp coin
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <span className="dropdown-item" onClick={logout}>
                    <i class="fas fa-sign-out-alt"> </i>
                    <span> Đăng xuất</span>
                  </span>
                </div>
              </li>
            </ul>

            <Link
              style={{ display: login ? "none" : "block" }}
              className="btn btn-light my-2 my-sm-0 btn-login-home"
              to="/login"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
