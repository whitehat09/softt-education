/** @format */

import React from "react";

function Home(props) {
  const user = 1000;
  const cousers = 20;

  return (
    <div style={{ backgroundColor: "#545454" }}>
      <div
        style={{
          marginBottom: "40px",
          height: "1350px",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/129914866_2753006601635176_8264044795716006807_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=0kgRJB2HYucAX8X3YuX&_nc_ht=scontent.fhph1-2.fna&_nc_tp=30&oh=ee3a2feee04b79829a0def7a943b1bbb&oe=5FF2A6DE')",
        }}
      ></div>
      <div
        className="intro row"
        style={{ marginBottom: "40px", backgroundColor: "#545454" }}
      >
        <div
          className="card col-md-4 col-12"
          style={{ width: "18rem", textAlign: "center", border: "none",backgroundColor:"#545454", color:"#c8c3bd" }}
        >
          <div className="card-body">
            <h3>{`Trên ${user} học viên`}</h3>
          </div>
        </div>
        <div
          className="card col-md-4 col-12"
          style={{ width: "18rem", textAlign: "center", border: "none",backgroundColor:"#545454", color:"#c8c3bd" }}
        >
          <div className="card-body">
            <h3>{`+ ${cousers} dành cho bạn`}</h3>
          </div>
        </div>
        <div
          className="card col-md-4 col-12"
          style={{ width: "18rem", textAlign: "center", border: "none",backgroundColor:"#545454", color:"#c8c3bd" }}
        >
          <div className="card-body">
            <h3>{"Học bất cứ lúc nào, bất cứ nơi đâu"}</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cousers row" style={{ padding: "0" }}>
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
                <a href="#" className="btn btn-primary">
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

export default Home;
