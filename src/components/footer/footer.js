import React, { Component } from 'react';
import '~/components/footer/footer.css'


class Footer extends Component {
    render() {
        return (
            <div className='footer d-flex justify-content-around'>
                <div className='nav-item active'>
                    <a href='/' className='nav-link'>
                        <span><i class="bi bi-house-door-fill"></i></span>
                        <span>Trang chủ</span>
                    </a>
                </div>
                <div className='nav-item'>
                    <a href='/category' className='nav-link'>
                        <span><i class="bi bi-currency-exchange"></i></span>
                        <span>Hạng mục</span>
                    </a>
                </div>
                <div className='nav-item'>
                    <a href='/contact' className='nav-link'>
                        <span><i class="bi bi-headset"></i></span>
                        <span>CSKH</span>
                    </a>
                </div>
                <div className='nav-item'>
                    <a href='/aboutus' className='nav-link'>
                        <span><i class="bi bi-buildings-fill"></i></span>
                        <span>Giới thiệu</span>
                    </a>
                </div>
                <div className='nav-item'>
                    <a href='/profile' className='nav-link'>
                        <span><i class="bi bi-person-fill"></i></span>
                        <span>Của tôi</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;