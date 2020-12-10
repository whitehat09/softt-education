/** @format */

import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <div>
      {' '}
      <div className='container-fluid'>
        <div className='row'>
          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='0'
                className='active'
              ></li>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='1'
              ></li>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='2'
              ></li>
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  className='d-block w-100'
                  src='https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/129914866_2753006601635176_8264044795716006807_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=0kgRJB2HYucAX8X3YuX&_nc_ht=scontent.fhph1-2.fna&_nc_tp=30&oh=ee3a2feee04b79829a0def7a943b1bbb&oe=5FF2A6DE'
                  alt='First slide'
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/129914866_2753006601635176_8264044795716006807_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=0kgRJB2HYucAX8X3YuX&_nc_ht=scontent.fhph1-2.fna&_nc_tp=30&oh=ee3a2feee04b79829a0def7a943b1bbb&oe=5FF2A6DE'
                  alt='Second slide'
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/129914866_2753006601635176_8264044795716006807_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=0kgRJB2HYucAX8X3YuX&_nc_ht=scontent.fhph1-2.fna&_nc_tp=30&oh=ee3a2feee04b79829a0def7a943b1bbb&oe=5FF2A6DE'
                  alt='Third slide'
                />
              </div>
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
