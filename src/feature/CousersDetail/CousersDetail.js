import React from 'react';
import './CousersDetail.css';

function CousersDetail(props) {
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
              <h2>Xây dựng web với NodeJS & ExpressJS</h2>
              <p>Xây dựng web trong thực tế với NodeJS & ExpressJS với cách chia sẻ chi tiết, tận tâm, dễ hiểu và chất giọng giàu sức sống của người chia sẻ</p>
              <h3 style={{ paddingBottom: ' 20px' }}>Bạn sẽ học được gì</h3>
              <div className='row' style={{ paddingBottom: '20px' }}>
                <div className='col-md-6 col-xs-12'>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Nắm chắc lý thuyết chung trong việc xây dựng web</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Xây dựng web với Express bằng kiến thức thực tế</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Nắm chắc lý thuyết về API và RESTful API</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Nắm chắc khái niệm về giao thức HTTP</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Học được cách tổ chức code trong thực tế</span>
                  </div>
                </div>
                <div className='col-md-6 col-xs-12'>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Biết cách làm việc với Mongoose, MongoDB trong NodeJS</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Biết cách xây dựng API theo chuẩn RESTful API</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Được chia sẻ lại kinh nghiệm làm việc thực tế</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Hiểu rõ tư tưởng và cách hoạt động của mô hình MVC</span>
                  </div>
                  <div className='des-icon-check'>
                    <i className='fas fa-check icon-check'></i>
                    <span>Biết cách deploy (triển khai) website lên internet</span>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-8 col-xs-12'>
                  <h3>Nội dung khoá học</h3>
                </div>
                <div className='col-md-4 col-xs-12'>
                  <p style='padding-top: 5px'>
                    36 Bài học
                    <span> 12:07:52 </span>
                  </p>
                </div>
              </div>

              <div className='row name-course-post'>
                <a href='#'>
                  <div className='col-md-12 col-xs-12'>
                    <div>
                      <i className='fas fa-play-circle icon-play-post'></i>
                      <span> 1 . </span>
                      <span> Lời khuyên giúp học lập trình hiệu quả hơn</span>

                      <span style='float: right; padding: 0px 20px 0px 20px'>06:27</span>
                      <span style='float: right; padding: 0px 20px 0px 20px'>Học thử</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className='row name-course-post'>
                <a href='#'>
                  <div className='col-md-12 col-xs-12'>
                    <div>
                      <i className='fas fa-play-circle icon-play-post'></i>
                      <span> 1 . </span>
                      <span> Lời khuyên giúp học lập trình hiệu quả hơn</span>

                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>06:27</span>
                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>Học thử</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className='row name-course-post'>
                <a href='#'>
                  <div className='col-md-12 col-xs-12'>
                    <div>
                      <i className='fas fa-play-circle icon-play-post'></i>
                      <span> 1 . </span>
                      <span> Lời khuyên giúp học lập trình hiệu quả hơn</span>

                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>06:27</span>
                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>Học thử</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className='row name-course-post'>
                <a href='#'>
                  <div className='col-md-12 col-xs-12'>
                    <div>
                      <i className='fas fa-play-circle icon-play-post'></i>
                      <span> 1 . </span>
                      <span> Lời khuyên giúp học lập trình hiệu quả hơn</span>

                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>06:27</span>
                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>Học thử</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className='row name-course-post'>
                <a href='#'>
                  <div className='col-md-12 col-xs-12'>
                    <div>
                      <i className='fas fa-play-circle icon-play-post'></i>
                      <span> 1 . </span>
                      <span> Lời khuyên giúp học lập trình hiệu quả hơn</span>

                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>06:27</span>
                      <span style={{ float: 'right', padding: '0px 20px 0px 20px' }}>Học thử</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-xs-12'>
            <div>
              <div className='right-courses-detail'>
                <div>
                  <button type='button' className='btn btn-danger btn-courses-detail'>
                    Đăng ký học
                  </button>
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-tachometer-alt icon-right-courses'></i>
                  <span> Trình độ cơ bản</span>
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-film icon-right-courses'></i>
                  <span> Tổng số 36 bài học</span>
                </div>
                <div className='des-right-courses'>
                  <i className='fas fa-clock icon-right-courses'></i>
                  <span> Cần 12.12 giờ để học</span>
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
