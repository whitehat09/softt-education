/** @format */

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RestfulUtils from '../../utils/RestfulUtils';

function Courses(props) {
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
<<<<<<< HEAD
    <div className="courses" style={{ backgroundColor: '#545454' ,minHeight:'calc(100vh - 226px)'}}>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0', marginTop: '60px' }}>
          
           {data.map((item) => {
            return (
              <div className='col-md-4 col-12' style={{ padding: '20px',backgroundColor: '#545454' }}>
                <div className='card ' style={{ padding: '0',backgroundColor: '#545454', border:'1px solid white',color: '#c8c3bd' }}>
=======
    <div style={{ backgroundColor: '#545454' }}>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0', marginTop: '60px' }}>
          {data.map((item) => {
            return (
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
                    <Link to={`/courses/${item._id}`} className='btn btn-primary'>
                      Đăng ký
                    </Link>
>>>>>>> de4cbc95d875ba4107f8cf0f331cf8bc596278a4
                  </div>
                </div>
              </div>
            );
          })}
        </div>

<<<<<<< HEAD
        <div className='paginate pagination justify-content-center' >
=======
        <div className='paginate' style={{ display: 'flex', justifyContent: 'flex-end' }}>
>>>>>>> de4cbc95d875ba4107f8cf0f331cf8bc596278a4
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

export default Courses;