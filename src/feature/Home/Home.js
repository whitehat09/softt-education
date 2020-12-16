/** @format */

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RestfulUtils from '../../utils/RestfulUtils';

import './Home.css';
function Home(props) {
  const users = 1000;
  const cousers = 20;

  const [data, setData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    RestfulUtils.get(`http://localhost:3030/courses?$limit=${10}&$skip=${0}`)
      .then((res) => {
        console.log(res);
        if (!res.error && res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#545454' }}>
      <div
        style={{
          marginBottom: '40px',
          height: '1350px',
          backgroundSize: 'cover',
          backgroundImage:
            "url('https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/129914866_2753006601635176_8264044795716006807_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=0kgRJB2HYucAX8X3YuX&_nc_ht=scontent.fhph1-2.fna&_nc_tp=30&oh=ee3a2feee04b79829a0def7a943b1bbb&oe=5FF2A6DE')",
        }}
      ></div>
     
      <div className='intro row' style={{ marginBottom: '40px', backgroundColor: '#545454' }}>
        <div className='card col-md-4 col-12' style={{ width: '18rem', textAlign: 'center', border: 'none', backgroundColor: '#545454', color: '#c8c3bd' }}>
          <div className='card-body'>
            <img className="img-icon-i-course" src="https://fullstack.edu.vn/images/feature-1.png?32035f34c520f99c24c91ef22921b547"></img>
            <h3>{`Trên ${users} học viên`}</h3>
          </div>
        </div>
        <div className='card col-md-4 col-12' style={{ width: '18rem', textAlign: 'center', border: 'none', backgroundColor: '#545454', color: '#c8c3bd' }}>
          <div className='card-body'>
          <img className="img-icon-i-course" src="https://fullstack.edu.vn/images/feature-2.png?b1b45d7724929e4208d151888ef1b6fc"></img>
            <h3>{`+ ${cousers} dành cho bạn`}</h3>
          </div>
        </div>
        <div className='card col-md-4 col-12' style={{ width: '18rem', textAlign: 'center', border: 'none', backgroundColor: '#545454', color: '#c8c3bd' }}>
          <div className='card-body'>
          <img className="img-icon-i-course" src="https://fullstack.edu.vn/images/feature-3.png?1364c5701d95fced16b9d796fceff7d5"></img>
            <h3>{'Học bất cứ lúc nào, bất cứ nơi đâu'}</h3>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0' }}>
          {data.map((item) => {
            return (
<<<<<<< HEAD
              <div className='col-md-4 col-12' style={{ padding: '20px',backgroundColor: '#545454' }}>
                <div className='card ' style={{ padding: '0',backgroundColor: '#545454', border:'1px solid white',color: '#c8c3bd' }}>
=======
              <div className='col-md-3 col-12' style={{ padding: '20px' }}>
                <div className='card ' style={{ padding: '0' }}>
>>>>>>> de4cbc95d875ba4107f8cf0f331cf8bc596278a4
                  <img className='card-img-top' src={item.avatar} alt='Card image cap' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>{item.description}</p>
<<<<<<< HEAD
                    
                    <p className='card-text'>Tổng bài học {item.lessons.length}</p>
                    <div>
                    <Link className='navbar-brand' to='/'>
                          <span style={{ color: '#fe4e00' }}>Softt</span> education
                      </Link>
                      <span className='card-text'><i class="fas fa-users"></i> {item.users.length}</span>
                      <Link style={{ float:'right',marginTop:'20px' }} className='btn btn-light my-2 my-sm-0 btn-detail-courses' onClick={() => {history.push(`/courses/${item._id}`)}}>
                        Chi tiết khoá học
                      </Link>  
                    </div>


                    
                              
=======
                    <p className='card-text'>Tổng học viên {item.users.length}</p>
                    <p className='card-text'>Tổng bài học {item.lessons.length}</p>
                    <button className='btn btn-primary' onClick={() => {history.push(`/courses/${item._id}`)}}>
                      Đăng ký
                    </button>
>>>>>>> de4cbc95d875ba4107f8cf0f331cf8bc596278a4
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='paginate pagination justify-content-center' >
          <nav aria-label='Page navigation example'>
            <ul class='pagination'>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  Previous
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  1
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  2
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
                  3
                </a>
              </li>
              <li class='page-item'>
                <a class='page-link' href='#'>
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