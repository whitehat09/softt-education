/** @format */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../../recoil/appState';

function Menu(props) {
<<<<<<< HEAD
  const user = {name: 'Thắng'};
=======
  // const user = JSON.parse(
  //   sessionStorage.getItem('user') || localStorage.getItem('user')
  // );
  const user = JSON.parse(
    sessionStorage.getItem('user') || localStorage.getItem('user') || '{}'
  );
  const [login, setLogin] = useRecoilState(loginState);

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');
    setLogin(false);
  };
>>>>>>> dd5d4aa061e7de930e2f283327071ac6c37b466f
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
              <li
                className='nav-item dropdown'
                style={{ display: login && user ? 'block' : 'none' }}
              >
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
                    src={user.avatar}
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
                  <span className='dropdown-item' onClick={logout}>
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
            <Link
              style={{ display: login ? 'none' : 'block' }}
              className='btn btn-outline-success my-2 my-sm-0'
              to='/login'
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
