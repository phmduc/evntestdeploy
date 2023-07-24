import React, { Component } from "react";
import "~/components/tabs/tabs.css";
import Slider from "react-slick";
import ProgressBar from "react-bootstrap/ProgressBar";
import image from "~/assets/images//150197cfc3f41705236adbe2174dd98d4b79f400.webp";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
      nav4: null,
      nav5: null,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
      nav4: this.slider4,
      nav5: this.slider5,
    });
  }
  render() {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    const now = 60;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
    };
    return (
      <div className="container">
        <div className="tabHeader">
          <Slider
            {...settings}
            asNavFor={this.state.nav5}
            ref={(slider) => (this.slider1 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            centerMode={true}
          >
            <div className="itemHeader">Tất cả</div>
            <div className="itemHeader">Sản phẩm phúc lợi</div>
            <div className="itemHeader">Khu vực VIP1</div>
            <div className="itemHeader">Khu VIP2</div>
            <div className="itemHeader">Khu VIP3</div>
          </Slider>
        </div>
        <div className="contentTab">
          <Slider
            {...settings}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider5 = slider)}
          >
            <div className="itemsProject">
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span id="demo"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemsProject">
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span id="demo"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemsProject">
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span id="demo"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemsProject">
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span id="demo"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemsProject">
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span id="demo"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxProject">
                <div className="title">
                  Quỹ xây dựng đường dây điện thông thường
                </div>
                <div className="image img-wrap mt-2">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="span position-absolute">
                    <div>
                      <span>Sản phẩm phúc lợi</span>
                    </div>
                    <div>
                      <span>Rất khuyến khích</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="text-center">
                      <span>15phút</span>
                      <p>Thời gian đầu tư</p>
                    </li>
                    <li className="text-center">
                      <span>1.5%</span>
                      <p>Tỷ lệ lợi nhuận</p>
                    </li>
                    <li className="text-center">
                      <span>75.000</span>
                      <p>Tổng thu nhập</p>
                    </li>
                    <li className="text-center">
                      <span>5.000.000</span>
                      <p>Số tiền mua tối thiểu</p>
                    </li>
                  </ul>
                  <span className="note">
                    Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                    hoàn trả khi kết thúc phiên
                  </span>
                  <div className="progressBar">
                    <label>tiến độ dự án:</label>
                    <ProgressBar now={now} label={`${now}%`} />
                  </div>
                  <button className="btn btnRegister">Ngừng đăng ký</button>
                  <div className="countdown d-flex align-items-center justify-content-center">
                    <span className="textCountDown">Mua đếm ngược:</span>
                    <div className="countdownJS">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Tabs;
