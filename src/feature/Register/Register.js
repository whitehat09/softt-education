import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/appState';
import RestfulUtils from '../../utils/RestfulUtils';
const Register = (props) => {
  const [login, setLogin] = useRecoilState(loginState);
  const [dataGroup, setDataGroup] = useState({ name: '', username: '', password: '' });
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    RestfulUtils.post('http://localhost:3030/users', dataGroup)
      .then((res) => {
        console.log('Thanh cong');
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(e);
  };

  const onChange = (type, e) => {
    const newDataGroup = { ...dataGroup };

    newDataGroup[type] = e.target.value;

    setDataGroup(newDataGroup);
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
              <div className='title-login-edu'>
                <Link className='txt2 logo-login-edu' to='/'>
                  <p>
                    <span style={{ color: 'rgb(254, 78, 0)' }}>Softt</span> education
                  </p>
                </Link>
                <p style={{ textAlign: 'center' }}>
                  Softt education là cộng đồng học thực tế . Đăng nhập để cùng nhau học tập, đóng góp và chia sẻ kiến thức ❤️
                </p>
                <span className='login100-form-title'>Đăng kí thành viên</span>
                <hr style={{ backGroundColor: 'white', height: '1px' }} />
              </div>

              <div className='wrap-input100 validate-input' data-validate='Valid Account is required: ex@abc.xyz'>
                <input value={dataGroup.name} onChange={(e) => onChange('name', e)} className='input100' type='text' name='name' placeholder='Họ và tên' />
                <span className='focus-input100' />
                <span className='symbol-input100'>
                  <i className='fas fa-user' aria-hidden='true' />
                </span>
              </div>
              <div className='wrap-input100 validate-input' data-validate='Valid Account is required: ex@abc.xyz'>
                <input
                  value={dataGroup.username}
                  onChange={(e) => onChange('username', e)}
                  className='input100'
                  type='text'
                  name='username'
                  placeholder='Tài khoản'
                />
                <span className='focus-input100' />
                <span className='symbol-input100'>
                  <i className='fa fa-envelope' aria-hidden='true' />
                </span>
              </div>
              <div className='wrap-input100 validate-input' data-validate='Password is required'>
                <input
                  value={dataGroup.password}
                  onChange={(e) => onChange('password', e)}
                  className='input100'
                  type='password'
                  name='pass'
                  placeholder='Mật khẩu'
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
                  Đã có tài khoản ? Đăng nhập
                  <i className='fa fa-long-arrow-right m-l-5' aria-hidden='true' />
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
