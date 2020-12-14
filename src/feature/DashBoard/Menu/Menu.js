/** @format */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
function Menu(props) {
  const user = {name: 'Thắng'};
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>
            <span style={{ color: '#fe4e00' }}>Softt</span> education
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink exact className='nav-link' to='/'>
                  Trang chủ
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/courses'>
                  Khoá học
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <span
                  className='nav-link dropdown-toggle'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <img
                    src='https://scontent.fhph1-2.fna.fbcdn.net/v/t1.0-9/125817490_2795678467379547_6413108716132894655_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=egnk6t7HZ0cAX-KRjHR&_nc_ht=scontent.fhph1-2.fna&oh=c84b0c8b0d3d54b245768ca0e5c7466d&oe=5FF391F4'
                    alt=''
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  {user.name}
                </span>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <div className='dropdown-divider'></div>
                  <NavLink className='dropdown-item' to='/me/courses'>
                    Khoá học của tôi
                  </NavLink>
                  <div className='dropdown-divider'></div>
                  <span className='dropdown-item'>
                    Đăng xuất
                  </span>
                </div>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
