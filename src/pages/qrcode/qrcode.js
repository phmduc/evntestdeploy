import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/qrcode/qrcode.css";
import imgQR from "~/assets/images//tải xuống (2).webp";

class Qrcode extends Component {
  handleCopyClick = () => {
    const valueToCopy = document.querySelector(
      ".qrcode .contentQR .inviteCode .valueSpan"
    ).textContent;

    // Tạo phần tử input tạm thời
    const tempInput = document.createElement("input");
    tempInput.value = valueToCopy;
    document.body.appendChild(tempInput);

    // Sao chép giá trị vào clipboard
    tempInput.select();
    document.execCommand("copy");

    // Loại bỏ phần tử input tạm thời
    document.body.removeChild(tempInput);

    // Hiển thị thông báo hoặc thực hiện các hành động khác
    const copyNotif = document.querySelector(".copyNotif");
    copyNotif.classList.add("show");

    setTimeout(() => {
      copyNotif.classList.remove("show");
    }, 3000);
  };
  render() {
    return (
      <FooterOnly>
        <div className="qrcode position-relative">
          <div className="headerQR">
            <a href="# " className="iconBack">
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
                <span className="valueSpan">123456</span>
              </li>
              <li onClick={this.handleCopyClick}>
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
}

export default Qrcode;
