/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestfulUtils from '../../utils/RestfulUtils';
function Home(props) {
  const users = 1000;
  const cousers = 20;

  const [data, setData] = useState([]);

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
      <button onClick={() => console.log(data)}>cac</button>
      <div className='intro row' style={{ marginBottom: '40px', backgroundColor: '#545454' }}>
        <div className='card col-md-4 col-12' style={{ width: '18rem', textAlign: 'center', border: 'none', backgroundColor: '#545454', color: '#c8c3bd' }}>
          <div className='card-body'>
            <h3>{`Trên ${users} học viên`}</h3>
          </div>
        </div>
        <div className='card col-md-4 col-12' style={{ width: '18rem', textAlign: 'center', border: 'none', backgroundColor: '#545454', color: '#c8c3bd' }}>
          <div className='card-body'>
            <h3>{`+ ${cousers} dành cho bạn`}</h3>
          </div>
        </div>
        <div className='card col-md-4 col-12' style={{ width: '18rem', textAlign: 'center', border: 'none', backgroundColor: '#545454', color: '#c8c3bd' }}>
          <div className='card-body'>
            <h3>{'Học bất cứ lúc nào, bất cứ nơi đâu'}</h3>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0' }}>
          {data.map((item) => {
            return (
              <div className='col-md-3 col-12' style={{ padding: '20px' }}>
                <div className='card ' style={{ padding: '0' }}>
                  <img className='card-img-top' src='https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg' alt='Card image cap' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text'>{item.description}</p>
                    <button className='btn btn-primary'>Đăng ký</button>
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

export default Home;
