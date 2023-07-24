import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/recharge/recharge.css";



class Recharge extends Component {
  render() {

    
    return (
      <FooterOnly>
        <div className="recharge">
          <div className="position-relative">
            <span className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Nạp tiền</h6>
          </div>

          <div className="main-content">
            <div className="usable d-flex justify-space-around align-items-center">
              <div className="usable-left">
                <span>Tổng tài sản</span>
                <span>
                  <u>đ</u> 10000
                </span>
              </div>
              <div className="usable-right">
                <a href="#">
                  Nhật kí nạp tiền >
                </a>
              </div>
            </div>

            <div className="recharge-title">
              <div className="name">Nạp tiền VND</div>
              <div className="list-recharge">
                <div className="item active">
                  <span>500000</span>
                </div>
                <div className="item">
                  <span>1000000</span>
                </div>
                <div className="item">
                  <span>5000000</span>
                </div>
                <div className="item">
                  <input type="text" placeholder="Vui lồng nhập số tiền"></input>
                </div>
              </div>
            </div>

            <div className="link-btn"><a href="#">CSKH</a></div>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Recharge;
