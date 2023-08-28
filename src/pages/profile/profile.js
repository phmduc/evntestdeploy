import React, { useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import "~/pages/profile/profile.css";
import image from "~/assets/images//EVN-logo.9702d7df.webp";
import image1 from "~/assets/images/icon1.webp";
import image2 from "~/assets/images/icon2.webp";
import image3 from "~/assets/images/icon3.webp";
import { useDispatch } from 'react-redux';
import { logOut } from "~/redux/authentication/actionCreator";
import { useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";

function Profile(){
  const phone = sessionStorage.getItem('phone')

  const dispatch = useDispatch()
  const id = sessionStorage.getItem("user_id");
  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));
  useEffect(()=>{
    dispatch(getinfo(id));
  },[dispatch])



  const handleLogOut = (e)=>{
    e.preventDefault()
    dispatch(logOut(()=>{
      window.location.reload()
    }));
  }

    return (
      <FooterOnly>
        <div className="profile">
          <div className="infoProfile">
            <div className="title text-center">Trung tâm cá nhân</div>
            <div className="user d-flex align-items-center justify-content-start">
              <div className="avatar">
                <img src={image} alt="" className="img-fluid" />
              </div>
              <div className="nameUser">
                <div className="name">
                  <b>{phone}</b>
                </div>
                <div className="d-flex rank align-items-center">
                <div className="level">
                  <span>{auth ? auth.rank : ''}</span>
                </div>
                <span className={`status ${auth && auth.status} `}>{auth && auth.status == 'active' ? 'Hoạt động' : 'Bị khoá'}</span> 
                </div>
            
              </div>
            </div>
            <div className="assets d-flex align-items-center justify-content-around text-center">
              <div className="itemAssets">
                <p>Tổng tài sản</p>
                <div>
                  <b> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet) : ''}</b>
                </div>
              </div>
              <div className="itemAssets">
                <p>Số tiền có thể rút</p>
                <div>
                  <b> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_can_cash) : ''}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="listMoney d-flex align-items-center justify-content-around">
              <a href="profile/Recharge" className="itemMoney">
                <div className="bgImg">
                  <img src={image1} alt="" className="img-fluid" />
                </div>
                <p>Nạp tiền</p>
              </a>
              <a href="profile/Withdraw" className="itemMoney">
                <div className="bgImg">
                  <img src={image2} alt="" className="img-fluid" />
                </div>
                <p>Rút tiền</p>
              </a>
              <a href="profile/dailycheck " className="itemMoney">
                <div className="bgImg">
                  <img src={image3} alt="" className="img-fluid" />
                </div>
                <p>Đăng nhập</p>
              </a>
            </div>
            <div className="listDetails">
              <a href="profile/Record " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-clipboard-minus-fill"></i>
                </div>
                <p>Nhật ký</p>
              </a>
              <a href="profile/accountdetail " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-database-fill-gear"></i>
                </div>
                <p>Chi tiết tài khoản</p>
              </a>
              <a href="profile/ourproject " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-bar-chart-line-fill"></i>
                </div>
                <p>Đầu tư của tôi</p>
              </a>
              <a href="profile/paymentmethod " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-currency-exchange"></i>
                </div>
                <p>Chi tiết số tiền cá nhân</p>
              </a>
              <a href="profile/paymentmethod " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-wallet2"></i>
                </div>
                <p>Phương thức thanh toán</p>
              </a>
              <a href="profile/Shopping " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-shop-window"></i>
                </div>
                <p>Trung tâm mua sắm</p>
              </a>
              <a href="profile/PersonalSetting" className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-person-fill-gear"></i>
                </div>
                <p>Thiết lập cá nhân</p>
              </a>
              <a href="profile/Qrcode " className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-envelope-paper-heart-fill"></i>
                </div>
                <p>Mã mời</p>
              </a>
              <a href="#" onClick={handleLogOut} className="text-center">
                <div className="bgIcon">
                  <i class="bi bi-box-arrow-right"></i>
                </div>
                <p>Đăng xuất</p>
              </a>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }

export default Profile;
