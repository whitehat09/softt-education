/** @format */

import React from "react";

function Courses(props) {
  return (
    <div style={{ backgroundColor:"#545454",}} >
      <div className="container">
        <div
          className="cousers row"
          style={{ padding: "0", marginTop: "60px" ,}}
        >
          <div className="col-md-3 col-12" style={{ padding: "20px" }}>
            <div className="card " style={{ padding: "0" }}>
              <img
                className="card-img-top"
                src="https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12" style={{ padding: "20px" }}>
            <div className="card " style={{ padding: "0" }}>
              <img
                className="card-img-top"
                src="https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="" className="btn btn-primary">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12" style={{ padding: "20px" }}>
            <div className="card " style={{ padding: "0" }}>
              <img
                className="card-img-top"
                src="https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="" className="btn btn-primary">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12" style={{ padding: "20px" }}>
            <div className="card " style={{ padding: "0" }}>
              <img
                className="card-img-top"
                src="https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="" className="btn btn-primary">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-12" style={{ padding: "20px" }}>
            <div className="card " style={{ padding: "0" }}>
              <img
                className="card-img-top"
                src="https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="" className="btn btn-primary">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="paginate"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Courses;
