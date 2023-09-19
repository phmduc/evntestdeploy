import React, { Component } from "react";
import { useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/qrcode/qrcode.css";
import imgQR from "~/assets/images//tải xuống (2).webp";
import { useSelector, useDispatch } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import { useNavigate } from "react-router-dom";


function Qrcode() {
  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const id = sessionStorage.getItem('user_id')
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getinfo(id));
  },[dispatch])
  const handleCopyClick = () => {
    const valueToCopy = document.querySelector(
      ".qrcode .contentQR .inviteCode .valueSpan"
    ).textContent;

    const tempInput = document.createElement("input");
    tempInput.value = valueToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    const copyNotif = document.querySelector(".copyNotif");
    copyNotif.classList.add("show");

    setTimeout(() => {
      copyNotif.classList.remove("show");
    }, 3000);
  };
    return (
      <FooterOnly>
        <div className="qrcode position-relative">
          <div className="headerQR">
            <a href="# " onClick={goBack} className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title">Mời bạn bè</div>
          </div>
          <div className="bgQR"></div>
          <div className="contentQR d-flex flex-column align-items-center">
            <div className="imgQR">
              <img src={imgQR} alt="" className="img-fluid" />
            </div>
            <ul className="inviteCode d-flex justify-content-around align-items-center">
              <li>
                <span>Mã mời</span>
              </li>
              <li>
                <span className="valueSpan">{auth ? auth.refcode :''}</span>
              </li>
              <li onClick={handleCopyClick}>
                <span>Sao Chép</span>
              </li>
            </ul>
          </div>
          <div className="bgBottom"></div>
          <div className="copyNotif">
            <div className="iconOK">
              <i class="bi bi-check-circle"></i>
            </div>
            <div className="ok">OK ~</div>
          </div>
        </div>
      </FooterOnly>
    );
  }

export default Qrcode;
