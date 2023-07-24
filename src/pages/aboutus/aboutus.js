import React, { Component } from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import '~/pages/aboutus/aboutus.css'

class AboutUs extends Component {
  render() {
    return (
        <FooterOnly>
          <div className='aboutus'>
           <div className='container'>
              <h6>Về chúng tôi</h6>
              <div className='list-item'>
                <a href='#' className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <img src='image/logo-evn.webp' />
                    <p>Hồ sơ công ty</p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>
  
                <a href='#' className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <img src='image/logo-bh.webp' />
                    <p>Bảo hiểm vốn đầu tư </p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>
  
                <a href='#' className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <img src='image/logo-evn.webp' />
                    <p>Vấn đề thường gặp</p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>
  
                <a href='#' className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <img src='image/logo-evn.webp' />
                    <p>Quy tắc rút tiền</p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>
  
                <a href='#' className='item d-flex justify-content-between align-items-center'>
                  <div className='item-title d-flex'>
                    <img src='image/logo-evn.webp' />
                    <p>Chính sách bảo mật</p>
                  </div>
                  <span><i class="bi bi-chevron-right"></i></span>
                </a>
              </div>
           </div>
          </div>
        </FooterOnly>
    );
  }
}

export default AboutUs;