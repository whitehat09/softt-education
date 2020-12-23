import "./Lessons.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestfulUtils from "../../utils/RestfulUtils";

import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/appState";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const Lessons = (props) => {
  const { id } = useParams();
  const [login, setLogin] = useRecoilState(loginState);
  const [urlIsPlay, setUrlIsPlay] = useState();
  const [course, setCourse] = useState({
    _id: "",
    title: "",
    avatar: "",
    teacher: "",
    description: "",
    price: "",
    users: [],
    lessons: [],
    totalLesson: "",
  });
  const [user, setUser] = useState({ _id: "", status: "", coin: "", name: "" });

  const history = useHistory();

  const transfrom = (arr) => {
    return arr.map((item) => item._id);
  };
  const onClickLesson = (url) => {
    setUrlIsPlay(url);
  };
  useEffect(() => {
    const user = JSON.parse(
      sessionStorage.getItem("user") || localStorage.getItem("user")
    );
    console.log("thông tin người dùng :", user);
    if (user) {
      setUser(user);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    RestfulUtils.get(
      `http://localhost:3030/courses/${id}?[$populate]=lessons`
    ).then((res) => {
      if (!res.errors && res.status === 200) {
        console.log("vao day");
        const { data } = res;
        const newCourse = {
          ...course,
          _id: data._id,
          title: data.title,
          avatar: data.avatar,
          teacher: data.teacher,
          description: data.description,
          price: data.price,
          users: data.users,
          lessons: data.lessons,
          totalLesson: data.totalLesson,
        };
        setCourse(newCourse);
        setUrlIsPlay(newCourse.lessons[0].url || "");
      }
    });
  };

  return (
    <div className="Lessons">
      <div style={{ color: "#c8c3bd" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8 mt-4">
              <div>
                <iframe
                  width="100%"
                  height="650px"
                  src={`https://www.youtube.com/embed/${urlIsPlay}`}
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
                  {course.title}
                </h2>
              </div>
              {course.lessons.map((lesson) => {
                return (
                  <div
                    className="list-group-flush hr-list"
                    onClick={() => onClickLesson(lesson.url)}
                    style={{ color: urlIsPlay == lesson.url ? "red" : "white" }}
                  >
                    <a className="list-group-item bg-list">
                      <p className="mb-0">
                        <span>{" " + lesson.priority + "."}</span>
                        <span> {lesson.title}</span>
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
