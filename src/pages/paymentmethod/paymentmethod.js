import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/paymentmethod/paymentmethod.css";

class PaymentMethod extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="paymentmethod">
          <div className="headerPayment">
            <a href="# " className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title text-center">
              Phương thức thanh toán của tôi
            </div>
          </div>
          <div className="showBank d-flex flex-column">
            <div className="nameBank">
              <span>DongA Bank</span>
            </div>
            <div className="number">
              <span>092****226</span>
            </div>
            <div className="close">
              <span>×</span>
            </div>
          </div>
          <a href="# " className=" addBank text-center d-block">
            Thêm thẻ ngân hàng
          </a>
          <div className="note">
            Mẹo: Nếu không tìm thấy thẻ ngân hàng trước đó, đó là do nền tảng
            thanh toán đã được chuyển đổi và thẻ ngân hàng cần được thêm lại.
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default PaymentMethod;
