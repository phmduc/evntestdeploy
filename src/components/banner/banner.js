import React, { Component } from "react";
import Slider from "react-slick";
import '~/components/banner/banner.css'

class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
     <div className="container">
        <div className="banner">
        <Slider {...settings}>
            <img src="image/banner1.webp" className="banner-item" />
            <img src="image/banner2.webp" className="banner-item" />
            <img src="image/banner3.webp" className="banner-item" />
            <img src="image/banner4.webp" className="banner-item" />
            <img src="image/banner5.webp" className="banner-item" />
            <img src="image/banner6.webp" className="banner-item" />
        </Slider>
      </div>
     </div>
    );
  }
}

export default Banner;
