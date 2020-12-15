import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/appState';
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useRecoilState(loginState);
  let history = useHistory();
  const onChange = (type, e) => {
    type(e.target.value);
    console.log(username);
    console.log(password);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('accessToken', username);
      sessionStorage.setItem('accessToken', username);
      localStorage.setItem('user', JSON.stringify({ name: username }));
      sessionStorage.setItem('user', JSON.stringify({ name: username }));
      setLogin(true);
      history.push('/');
    }
  };

  useEffect(() => {
    console.log(login);
    if (login) {
      history.push('/');
    }
    return () => {
      console.log('unmout');
    };
  }, []);
  return (
    <div className='login'>
      <div className='container-login100'>
        <div className='wrap-login100' style={{ justifyContent: 'center' }}>
          <div>
            <form className='login100-form validate-form' onSubmit={onSubmit}>
            <div className="title-login-edu">
                <Link className="txt2 logo-login-edu" to="/">
                  <p className="">
                    <span  style={{color: 'rgb(254, 78, 0)',}}>Softt</span> education
                  </p>
                </Link>
                <p style={{textAlign:'center'}} > 
                  Softt education là cộng đồng học  thực tế . Đăng nhập để cùng nhau học tập, đóng góp và chia sẻ kiến thức ❤️
                </p>
                <span className="login100-form-title">Thành viên đăng nhập</span>
                <hr style={{backGroundColor:'white',height:'1px'}} />
              </div>
              <div
                className='wrap-input100 validate-input'
                data-validate='Valid email is required: ex@abc.xyz'
              >
                <input
                  className='input100'
                  type='text'
                  name='username'
                  placeholder='Tài khoản'
                  value={username}
                  onChange={(e) => onChange(setUsername, e)}
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
                  name='password'
                  placeholder='Mật khẩu'
                  value={password}
                  onChange={(e) => onChange(setPassword, e)}
                />
                <span className='focus-input100' />
                <span className='symbol-input100'>
                  <i className='fa fa-lock' aria-hidden='true' />
                </span>
              </div>
              <div className='container-login100-form-btn'>
                <button className='login100-form-btn'>Đăng nhập</button>
              </div>

              <div className='text-center p-t-136'>
                <Link className='txt2' to='/register'>
                  Chưa có tài khoản? Đăng ký
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

export default Login;
