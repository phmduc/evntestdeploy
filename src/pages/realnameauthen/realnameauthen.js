import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/realnameauthen/realnameauthen.css";

class RealNameAuthen extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="realnameauthen">
          <div className="position-relative">
            <span className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Nạp tiền</h6>
          </div>

          <div className="main-content">
            <div className="item">
              <div><span>Tên</span></div>
              <div><span>v* trà dũng</span></div>
            </div>
            <div className="item">
              <div><span>mã số</span></div>
              <div><span>123***********123</span></div>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default RealNameAuthen;
