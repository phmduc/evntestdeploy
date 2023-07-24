import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/withdraw/withdraw.css";

class Withdraw extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="withdraw">
          <div className="position-relative">
            <span className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Chọn thẻ ngân hàng</h6>
          </div>

          <div className="main-content">
            <div className="option-form">
              <div className="row">
                <div className="col-3 p-1 d-flex justify-space-between align-items-center">
                  <div className="name">Rút tiền</div>
                </div>
                <div className="col-6 p-1 d-flex justify-space-between align-items-center">
                  <div class="form-group">
                    <select class="form-control">
                      <option selected>
                        Vui lòng chọn phương thức thanh toán
                      </option>
                      <option>DongA Bank|123***********123</option>
                    </select>
                  </div>
                </div>
                <div className="col-3 p-1 d-flex justify-space-between align-items-center">
                  <a href="#">Thêm hình thức thanh toán</a>
                </div>
              </div>
            </div>

            <div className="option-form">
              <div className="row">
                <div className="col-12 p-1 d-flex justify-space-between align-items-center">
                  <div className="name">Số tiền rút</div>
                </div>
                <div className="col-3"></div>
                <div className="col-9 p-1 d-flex justify-space-between align-items-center">
                  <input className="withdraw"
                    type="text"
                    placeholder="Vui lòng nhập số rút tiền"
                  />
                </div>
              </div>
            </div>

            <div className="option-form">
              <div className="row">
                <div className="col-3 p-1 d-flex justify-space-between align-items-center">
                  <div className="name">Số tiền có thể rút</div>
                </div>
                <div className="col-9 p-1 d-flex justify-space-between align-items-center">
                  <div className="amount"><span>10000</span></div>
                </div>
              </div>
            </div>

            <div className="option-form">
              <div className="row">
                <div className="col-3 p-1 d-flex justify-space-between align-items-center">
                  <div className="name">Mật khẩu giao dịch</div>
                </div>
                <div className="col-9 p-1 d-flex justify-space-between align-items-center">
                  <input className="pass"
                    type="password"
                    placeholder="Xin vui lòng nhập mật khẩu"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="butt">
          <button>Đăng kí rút tiền</button>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Withdraw;
