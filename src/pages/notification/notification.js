import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/notification/notification.css";

class Notification extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="notifition">
          <div className="container">
            <div className="position-relative">
                <span className="icon-left">
                  <i class="bi bi-chevron-left"></i>
                </span>
                <h6>Thông báo trang web</h6>
                <a className="icon-right" href="#">
                  <span >
                    <i class="bi bi-person-circle"></i>
                  </span>
                </a>
            </div>
          </div>

          <div className="container">
            <div className="main-content">
              <div className="list-item">
                <a href="#" className="item d-flex justify-content-between">
                  <div className="item-title d-flex">
                    <img src="image/speker.webp" />
                    <div className="sec-date">
                      <p>Tập đoàn Điện lực Việt Nam</p>
                      <div className="date">
                        <span>2023-02-01</span>
                        <span>18:35:02</span>
                      </div>
                    </div>
                  </div>
                  <span>
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </a>
  
                <a href="#" className="item d-flex justify-content-between">
                  <div className="item-title d-flex">
                    <img src="image/speker.webp" />
                    <div className="sec-date">
                      <p>Tập đoàn Điện lực Việt Nam</p>
                      <div className="date">
                        <span>2023-02-01</span>
                        <span>18:35:02</span>
                      </div>
                    </div>
                  </div>
                  <span>
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </a>
              </div>
  
              <div className="pages d-flex justify-content-between align-items-center">
                <div className="item-page">
                  <span>trang đầu</span>
                  <span>
                    <i class="bi bi-dash-lg"></i>
                  </span>
                </div>
  
                <div className="">
                  <span>1</span>
                  <span>/</span>
                  <span>1</span>
                </div>
  
                <div className="item-page">
                  <span>
                    <i class="bi bi-plus-lg"></i>
                  </span>
                  <span>trang sau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Notification;
