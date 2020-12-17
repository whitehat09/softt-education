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
    <div className="courses" style={{ backgroundColor: '#545454' ,minHeight:'calc(100vh - 226px)'}}>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0', marginTop: '56px' }}>
          
           {data.map((item) => {
            return (
              <div className='col-md-4 col-12' style={{ padding: '20px',backgroundColor: '#545454' }}>
                <div className='card ' style={{ padding: '0',backgroundColor: '#545454', border:'1px solid white',color: '#c8c3bd' }}>

                  <img className='card-img-top' src={item.avatar} alt='Card image cap' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>{item.description}</p>

                    
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

export default Courses;