import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestfulUtils from '../../utils/RestfulUtils';
import './CousersDetail.css';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/appState';
import { useHistory } from 'react-router-dom';
function CousersDetail(props) {
  const { id } = useParams();
  const [login, setLogin] = useRecoilState(loginState);
  const [course, setCourse] = useState({ _id: '', title: '', avatar: '', teacher: '', description: '', price: '', users: [], lessons: [], totalLesson: '' });
  const [user, setUser] = useState({ _id: '' });

  const history = useHistory();

  const transfrom = (arr) => {
    return arr.map((item) => item._id);
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user') || localStorage.getItem('user'));
    console.log('asdfasdf', user);
    if (user) {
      setUser(user);
    }
  }, []);

  useEffect(() => {
    RestfulUtils.get(`http://localhost:3030/courses/${id}?[$populate]=lessons`).then((res) => {
      if (!res.errors && res.status === 200) {
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
      }
    });
  }, []);

  const registerCourse = () => {
    if (login) {

      console.log('Goi api dang ki')
    } else {
      history.push('/login');
    }
  };
  return (
    <div className='corses-detail'>
      <div className='container'>
        <div className='row' style={{ padding: '25px 0px 20px 0px' }}>
          <div className='col-md-9 col-xs-12'>
            <div className='col-md-12 col-xs-12' style={{ color: ' #fe4e11', paddingBottom: '20px' }}>
              <span>Khoá học </span>
              <i className='fas fa-chevron-right'></i>
              <span> NodeJs </span>
            </div>

            <div className='col-md-12 col-xs-12' style={{ paddingBottom: '20px' }}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>

              <div className='row'>
                <div className='col-md-8 col-xs-12'>
                  <h3>Nội dung khoá học</h3>
                </div>
                <div className='col-md-4 col-xs-12'>
                  <p style={{ paddingTop: '5px' }}></p>
                </div>
              </div>

              {/* 2 */}

              {course.lessons.map((lesson) => {
                return (
                  <div className='row name-course-post'>
                    <div className='col-md-12 col-xs-12'>
                      <div>
                        <i className='fas fa-play-circle icon-play-post'></i>
                        <span>{' ' + lesson.priority + '.'}</span>
                        <span> {lesson.title}</span>

                        <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>{lesson.time || '0:0'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-md-3 col-xs-12'>
            <div>
              <div className='right-courses-detail'>
                <div>
                  {course.users.includes(user._id || 'x') ? (
                    <button type='button' className='btn btn-danger btn-courses-detail'>
                      Học tiếp
                    </button>
                  ) : (
                    <button onClick={registerCourse} type='button' className='btn btn-danger btn-courses-detail'>
                      Đăng ký học
                    </button>
                  )}
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-tachometer-alt icon-right-courses'></i>
                  <span> Trình độ cơ bản</span>
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-film icon-right-courses'></i>
                  <span> Tổng số {course.totalLesson} bài học</span>
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-clock icon-right-courses'></i>
                  <span> Cần {course.sumTime || '10'} giờ để học</span>
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-battery-three-quarters icon-right-courses'></i>
                  <span> Học mọi lúc mọi nơi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CousersDetail;
