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
    <div style={{ backgroundColor: '#545454' }}>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0', marginTop: '60px' }}>
          {data.map((item) => {
            return (
              <div className='col-md-3 col-12' style={{ padding: '20px' }}>
                <div className='card ' style={{ padding: '0' }}>
                  <img className='card-img-top' src={item.avatar} alt='Card image cap' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>{item.description}</p>
                    <Link to={`/courses/${item._id}`} className='btn btn-primary'>
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='paginate' style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
