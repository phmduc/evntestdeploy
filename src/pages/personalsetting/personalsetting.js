import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/personalsetting/personalsetting.css";
import Image from "~/assets/images//shoujihao-icon.webp";
import Image1 from "~/assets/images//huiyuandengji-icon.webp";
import Image2 from "~/assets/images//shimingrenzheng-icon.webp";
import Image3 from "~/assets/images//shoukuanfangshi-icons.webp";
import Image4 from "~/assets/images//xiugaimima-icon.webp";
import Image5 from "~/assets/images//jiaoyimima-icon.webp";

class PersonalSetting extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="personalSetting">
          <div className="headerSetting">
            <a href="# " className="iconBack">
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
              <div className="value">092****226</div>
            </a>
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image1} alt="" className="img-fluid" />
              </div>
              <p>Cấp độ thành viên</p>
              <div className="value">VIP0</div>
            </a>
          </div>
          <div className="list listOptions">
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image2} alt="" className="img-fluid" />
              </div>
              <p>Đã xác minh</p>
              <div className="value">Tên thật</div>
            </a>
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image3} alt="" className="img-fluid" />
              </div>
              <p>Phương thức thanh toán ràng buộc</p>
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
            <a href="# " className="items d-flex align-items-center">
              <div className="iconImg d-flex">
                <img src={Image5} alt="" className="img-fluid" />
              </div>
              <p>Mật khẩu giao dịch</p>
              <div className="value">
                <i class="bi bi-chevron-right"></i>
              </div>
            </a>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default PersonalSetting;
