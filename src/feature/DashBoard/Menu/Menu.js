import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
function Menu(props) {
  const user = {};
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <NavLink className='navbar-brand' to='/'>
        2T-Education
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
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/'>
              Trang chủ
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/courses'>
              Khoá học
            </NavLink>
          </li>
        </ul>
        <div className='form-inline my-2 my-lg-0'>
          <div class='dropdown' style={{ cursor: 'pointer' }}>
            <h5
              class='dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Nguyễn Văn Thịnh
            </h5>
            <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <a class='dropdown-item' href='#'>
                Thông tin cá nhân
              </a>
              <a class='dropdown-item' href='#'>
                Khoá học của tôi
              </a>
              <button class='dropdown-item' href='#'>
                Đăng xuất
              </button>
            </div>
          </div>
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            style={{ display: user ? 'none' : 'block' }}
          >
            {'Đăng nhập'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
