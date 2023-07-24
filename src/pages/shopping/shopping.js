import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/shopping/shopping.css";
import imgBanner from "~/assets/images/488888.webp";

class Shopping extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="shopping">
          <div className="headerShopping">
            <a href="# " className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title text-center">Trung tâm mua sắm Points</div>
          </div>
          <div className="bannerImg img-wrap">
            <img src={imgBanner} alt="" />
            <div className="points">
              <span>Số dư điểm: 0</span>
            </div>
          </div>
          <div className="boardProduct">
            <div className="title position-relative text-center">
              Danh sách sản phẩm
            </div>
            <div className="listProduct"></div>
            <div className="pagination"></div>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Shopping;
