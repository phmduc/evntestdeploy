import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/accountdetail/accountdetail.css";

class AccountDetail extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="accountdetail">
          <div className="position-relative">
            <span className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Chi tiết tài khoản</h6>
          </div>

          <div className="main-content">
            <div className="card-bg"></div>

            <div className="list-item">
              <div className="card">
                <div className="card-info">
                  <div className="image">
                    <img src="image/logo.webp" />
                  </div>
                  <div className="info-title">
                    <span>Tổng tài sản</span>
                    <span>
                      <u>đ</u> 10000
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <span>Số tiền nạp</span>
                <span>
                  <u>đ</u> 0
                </span>
              </div>
              <div className="item">
                <span>Số tiền rút</span>
                <span>
                  <u>đ</u> 0
                </span>
              </div>
              <div className="item">
                <span>Số tiền đầu tư</span>
                <span>
                  <u>đ</u> 0
                </span>
              </div>
              <div className="item">
                <span>Thu nhập kiếm dc </span>
                <span>
                  <u>đ</u> 0
                </span>
              </div>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default AccountDetail;
