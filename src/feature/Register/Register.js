import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/appState';
const Register = (props) => {
  const [login, setLogin] = useRecoilState(loginState);

  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    if (login) {
      history.push('/');
    }
    return () => {
      console.log('unmout');
    };
  }, []);
  return (
    <div className=''>
      <div className='container-login100'>
        <div className='wrap-login100' style={{ justifyContent: 'center' }}>
          <div>
            <form className='login100-form validate-form' onSubmit={onSubmit}>
              <span className='login100-form-title'>Đăng kí</span>
              <div
                className='wrap-input100 validate-input'
                data-validate='Valid Account is required: ex@abc.xyz'
              >
                <input
                  className='input100'
                  type='text'
                  name='Account'
                  placeholder='Account'
                />
                <span className='focus-input100' />
                <span className='symbol-input100'>
                  <i className='fa fa-envelope' aria-hidden='true' />
                </span>
              </div>
              <div
                className='wrap-input100 validate-input'
                data-validate='Password is required'
              >
                <input
                  className='input100'
                  type='password'
                  name='pass'
                  placeholder='Password'
                />
                <span className='focus-input100' />
                <span className='symbol-input100'>
                  <i className='fa fa-lock' aria-hidden='true' />
                </span>
              </div>

              <div className='container-login100-form-btn'>
                <button className='login100-form-btn'>Đăng kí</button>
              </div>
              <div className='text-center p-t-136'>
                <Link className='txt2' to='/login'>
                  Đã có tài khoản? Đăng nhập
                  <i
                    className='fa fa-long-arrow-right m-l-5'
                    aria-hidden='true'
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
