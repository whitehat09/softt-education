/** @format */

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RestfulUtils from "../../utils/RestfulUtils";

function MeCourses(props) {
  const [user, setUser] = useState({ _id: "", status: "", coin: "", name: "" });
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState({ _id: "" });
  let history = useHistory();
  useEffect(() => {
    const user = JSON.parse(
      sessionStorage.getItem("user") || localStorage.getItem("user")
    );
    const newUserId = {
      ...userId,
      _id: user._id,
    };
    if (user) {
      setUser(user);
    }

    setUserId(newUserId);

    console.log("user id", user);
  }, []);
  useEffect(() => {
    console.log("id người dùng :", userId);
    const user = JSON.parse(
      sessionStorage.getItem("user") || localStorage.getItem("user")
    );
    RestfulUtils.get(`http://localhost:3030/courses?users=${user._id}`)
      .then((res) => {
        console.log(res.data.data);
        if (!res.error && res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="courses"
      style={{ backgroundColor: "#545454", minHeight: "calc(100vh - 226px)" }}
    >
      <div className="container">
        <div
          className="cousers row"
          style={{ padding: "0", marginTop: "56px" }}
        >
          <div className="col-md-12 col-12">
            <h3 style={{ color: "#c8c3bd", paddingTop: "20px" }}>
              <p>
                Khoá học của
                <span>{" " + user.name}</span>
              </p>
            </h3>
          </div>
          {data.map((item) => {
            return (
              <div
                className="col-md-4 col-12"
                style={{ padding: "20px", backgroundColor: "#545454" }}
              >
                <div
                  className="card "
                  style={{
                    padding: "0",
                    backgroundColor: "#545454",
                    border: "1px solid white",
                    color: "#c8c3bd",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={item.avatar}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>

                    <p className="card-text">
                      Tổng bài học {item.lessons.length}
                    </p>
                    <div>
                      <Link className="navbar-brand" to="/">
                        <span style={{ color: "#fe4e00" }}>Softt</span>{" "}
                        education
                      </Link>
                      <span className="card-text">
                        <i class="fas fa-users"></i> {item.users.length}
                      </span>
                      <Link
                        style={{ float: "right", marginTop: "20px" }}
                        className="btn btn-light my-2 my-sm-0 btn-detail-courses"
                        onClick={() => {
                          history.push(`/courses/${item._id}`);
                        }}
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MeCourses;
