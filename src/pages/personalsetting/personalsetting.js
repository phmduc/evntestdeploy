import React, { Component, useState, useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/personalsetting/personalsetting.css";
import Image from "~/assets/images//shoujihao-icon.webp";
import Image1 from "~/assets/images//huiyuandengji-icon.webp";
import Image2 from "~/assets/images//shimingrenzheng-icon.webp";
import Image3 from "~/assets/images//shoukuanfangshi-icons.webp";
import Image4 from "~/assets/images//xiugaimima-icon.webp";
import Image5 from "~/assets/images//jiaoyimima-icon.webp";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import { withdrawCommand } from "~/redux/authentication/actionCreator";
import { useNavigate } from "react-router-dom";

function PersonalSetting()  {
  const dispatch = useDispatch();
  const id = sessionStorage.getItem("user_id");
  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));
  const navigate = useNavigate();

    
  console.log(auth)
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getinfo(id));
  }, [dispatch, id]);
    return (
      <FooterOnly>
        <div className="personalSetting">
          <div className="headerSetting">
            <a href="# " onClick={goBack} className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title">Thiết lập tài khoản</div>
          </div>
          <div className="list contentListInfo">
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image} alt="" className="img-fluid" />
              </div>
              <p>Số điện thoại</p>
              <div className="value">{auth ? auth.phone : ''}</div>
            </a>
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image1} alt="" className="img-fluid" />
              </div>
              <p>Cấp độ thành viên</p>
              <div className="value">{auth ? auth.rank : ''}</div>
            </a>
          </div>
          <div className="list listOptions">
            {auth && auth.verify == 'Đã xác minh' ? 
            <div  className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image2} alt="" className="img-fluid" />
              </div>
              <p>Đã xác minh</p>
            </div>
            :
            <a href="/profile/realnameauthen " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image2} alt="" className="img-fluid" />
              </div>
              <p>Vui lòng nhấn vào để xác minh tài khoản</p>
            </a>
            }
          
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image3} alt="" className="img-fluid" />
              </div>
              <a href="/profile/paymentmethod">Phương thức thanh toán ràng buộc</a>
              <div className="value">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image4} alt="" className="img-fluid" />
              </div>
              <p>Sửa đổi mật khẩu đăng nhập</p>
              <div className="value">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
          
          </div>
        </div>
      </FooterOnly>
    );
}

export default PersonalSetting;
