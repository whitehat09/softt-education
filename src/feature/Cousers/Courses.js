/** @format */

import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RestfulUtils from "../../utils/RestfulUtils";

function Courses(props) {
  const [data, setData] = useState([]);
  const [paginate, setPaginate] = useState({
    limit: 6,
    skip: 0,
    total: 0,
  });
  let history = useHistory();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    RestfulUtils.get(
      `http://localhost:3030/courses?$limit=${paginate.limit}&$skip=${paginate.skip}`
    )
      .then((res) => {
        if (!res.error && res.status === 200) {
          setData(res.data.data);
          const newPaginate = {
            ...paginate,
            total: res.data.total,
            skip: res.data.skip,
          };
          setPaginate(newPaginate);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickPagination = (page) => {
    const skip = (page - 1) * paginate.limit;
    RestfulUtils.get(
      `http://localhost:3030/courses?$limit=${paginate.limit}&$skip=${skip}`
    )
      .then((res) => {
        if (!res.error && res.status === 200) {
          setData(res.data.data);
          const newPaginate = {
            ...paginate,
            total: res.data.total,
            skip: res.data.skip,
          };
          setPaginate(newPaginate);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderPaginate = () => {
    let xhtml = [];

    for (let i = 1; i <= Math.ceil(paginate.total / paginate.limit); i++) {
      xhtml.push(
        <li className="page-item" onClick={() => onClickPagination(i)}>
          <div className="page-link">{i}</div>
        </li>
      );
    }
    return xhtml;
  };
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
                    <p className="card-text">giá khoá học {item.price} coin</p>
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
                        Chi tiết khoá học
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="paginate pagination justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">{renderPaginate()}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Courses;
