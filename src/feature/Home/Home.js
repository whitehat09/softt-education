import React from 'react';

function Home(props) {
  const user = 1000;
  const cousers = 20;

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <img src='https://fullstack.edu.vn/assets/images/home-img.jpg' alt='' />
      </div>
      <div className='intro row' style={{ marginBottom: '40px' }}>
        <div
          className='card col-md-4 col-12'
          style={{ width: '18rem', textAlign: 'center', border: 'none' }}
        >
          <div className='card-body'>
            <h5>{`Trên ${user} học viên`}</h5>
          </div>
        </div>
        <div
          className='card col-md-4 col-12'
          style={{ width: '18rem', textAlign: 'center', border: 'none' }}
        >
          <div className='card-body'>
            <h5>{`+ ${cousers} dành cho bạn`}</h5>
          </div>
        </div>
        <div
          className='card col-md-4 col-12'
          style={{ width: '18rem', textAlign: 'center', border: 'none' }}
        >
          <div className='card-body'>
            <h5>{'Học bất cứ lúc nào, bất cứ nơi đâu'}</h5>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='cousers row' style={{ padding: '0' }}>
          <div className='col-md-3 col-12' style={{ padding: '20px' }}>
            <div className='card ' style={{ padding: '0' }}>
              <img
                className='card-img-top'
                src='https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-12' style={{ padding: '20px' }}>
            <div className='card ' style={{ padding: '0' }}>
              <img
                className='card-img-top'
                src='https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-12' style={{ padding: '20px' }}>
            <div className='card ' style={{ padding: '0' }}>
              <img
                className='card-img-top'
                src='https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-12' style={{ padding: '20px' }}>
            <div className='card ' style={{ padding: '0' }}>
              <img
                className='card-img-top'
                src='https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Đăng ký
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-12' style={{ padding: '20px' }}>
            <div className='card ' style={{ padding: '0' }}>
              <img
                className='card-img-top'
                src='https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='paginate' style={{display:'flex', justifyContent: 'flex-end'}}>
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
