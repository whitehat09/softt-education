import "./Lessons.css";
const Lessons = (props) => {
  return (
    <div
      className="Lessons"
      style={{ backgroundColor: "#545454", minHeight: "calc(100vh - 226px)" }}
    >
      <div style={{ backgroundColor: "#202020", color: "#c8c3bd" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8 mt-4">
              <div>
                <iframe
                  width="100%"
                  height="650px"
                  src="https://www.youtube.com/embed/3C1LW6qa080"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="title-lesson">
                <span className="title-lesson-active"> Nội Dung bài học </span>
              </div>
              <div className="content-course">
                <p>
                  Tham gia nhóm Học softt để cùng nhau trao đổi trong quá trình
                  học tập ❤️
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="list-group-flush hr-list mt-4">
                <h2 className="list-group-item bg-list title-list">
                  Title course
                </h2>
              </div>
              <div className="list-group-flush hr-list">
                <a className="list-group-item bg-list">
                  <p className="mb-0">Photos</p>
                </a>
              </div>
              <div className="list-group-flush hr-list">
                <a href="#" className="list-group-item bg-list">
                  <p className="mb-0">Photos</p>
                </a>
              </div>
              <div className="list-group-flush hr-list">
                <a href="#" className="list-group-item bg-list">
                  <p className="mb-0">Photos</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
