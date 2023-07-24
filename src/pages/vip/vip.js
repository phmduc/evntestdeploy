import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/vip/vip.css";

class Vip extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="page-vip">
          <div className="position-relative">
            <span className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Thành viên của tôi</h6>
          </div>

          <div className="main-content">
            <div className="left">
              <div className="image"><img src="image/ava.webp" /></div>
              <div className="vip">VIP0</div>
            </div>
            <div className="right">
              <div>Mức hiện tại: <span>VIP0</span></div>
              <div>Dự án tăng lãi suất: <span>0%</span></div>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Vip;
