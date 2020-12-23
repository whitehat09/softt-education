import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/appState";
import RestfulUtils from "../../utils/RestfulUtils";
import "./login.css";
const Login = (props) => {
  const [dataGroup, setDataGroup] = useState({
    username: "",
    password: "",
    strategy: "local",
  });
  const [remember, setRemember] = useState(false);
  const [login, setLogin] = useRecoilState(loginState);
  let history = useHistory();
  const onChange = (type, e) => {
    const newDataGroup = { ...dataGroup };

    newDataGroup[type] = e.target.value;

    setDataGroup(newDataGroup);
  };

  const onChangeRemember = (e) => {
    setRemember(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    RestfulUtils.post("http://localhost:3030/authentication", dataGroup)
      .then((res) => {
        if (!res.errors && res.status === 201) {
          toast.success("Đăng nhập thành công");
          sessionStorage.setItem("accessToken", res.data.accessToken);
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          if (remember) {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.user));
          }
          history.push("/");
          setLogin(true);
        } else {
          toast.error("Tài khoản hoặc mật khẩu không đúng");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(login);
    if (login) {
      history.push("/");
    }
    return () => {
      console.log("unmout");
    };
  }, []);
  return (
    <div>
      <div className="container-login100">
        <div className="wrap-login100" style={{ justifyContent: "center" }}>
          <div>
            <form className="login100-form validate-form" onSubmit={onSubmit}>
              <div className="title-login-edu">
                <Link className="txt2 logo-login-edu" to="/">
                  <p className="">
                    <span style={{ color: "rgb(254, 78, 0)" }}>Softt</span>{" "}
                    education
                  </p>
                </Link>
                <p style={{ textAlign: "center" }}>
                  Softt education là cộng đồng học thực tế . Đăng nhập để cùng
                  nhau học tập, đóng góp và chia sẻ kiến thức ❤️
                </p>
                <span className="login100-form-title">
                  Thành viên đăng nhập
                </span>
                <hr style={{ backGroundColor: "white", height: "1px" }} />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Tài khoản"
                  value={dataGroup.username}
                  onChange={(e) => onChange("username", e)}
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
                  name="password"
                  placeholder="Mật khẩu"
                  value={dataGroup.password}
                  onChange={(e) => onChange("password", e)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <div className="container-login100-form-btn">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value={remember}
                  onChange={onChangeRemember}
                ></input>
                <label for="vehicle1" style={{ color: "#999999" }}>
                  Nhớ đăng nhập
                </label>
              </div>
              <div className="container-login100-form-btn">
                <button className="btn login100-form-btn">Đăng nhập</button>
              </div>
              <div className="text-center p-t-136">
                <Link className="txt2" to="/register">
                  Chưa có tài khoản? Đăng ký
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
