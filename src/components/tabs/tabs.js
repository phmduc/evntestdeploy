import React, { useEffect, useRef, useState } from "react";
import "~/components/tabs/tabs.css";
import Slider from "react-slick";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  projectsGetData,
  projectsInvest,
} from "~/redux/projects/actionCreator";
import { getauthpj } from "~/redux/authentication/actionCreator";
import numeral from "numeral";
import { getinfo } from "~/redux/authentication/actionCreator";
import Countdown from "~/components/moment/moment";
import moment from "moment";
import Modal from "react-modal";
import CurrencyInput from "react-currency-input-field";
import { toast } from "react-toastify";

function Tabs() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const tabSlider = useRef(null);
  const contentSlider = useRef(null);
  const dispatch = useDispatch();
  const id = sessionStorage.getItem("user_id");
  const { projects, loading, error } = useSelector((state) => ({
    projects: state.projects.projects,
    loading: state.blogs.loading,
    error: state.blogs.error,
  }));
  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));
  const { authpj } = useSelector((state) => ({
    authpj: state.pjauth.pjs,
  }));
  useEffect(() => {
    dispatch(projectsGetData());
    dispatch(getauthpj(id));
    dispatch(getinfo(id));
  }, [dispatch, id]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    asNavFor: tabSlider.current,
  };

  const isCurrentSession = (startTime) => {
    const now = moment();
    const sessionStart = moment(startTime, "HH:mm");
    let sessionEnd;
    if (startTime === "9h") {
      sessionEnd = sessionStart.clone().add(8, "hours"); // 9h đến 17h30
    } else if (startTime === "17h30") {
      sessionEnd = sessionStart.clone().add(4, "hours").add(30, "minutes"); // 17h30 đến 21h
    } else if (startTime === "21h") {
      sessionEnd = sessionStart.clone().add(12, "hours"); // 21h đến 9h
    }
    return now.isBetween(sessionStart, sessionEnd);
  };

  const isWithinOpeningTime = (item) => {
    const currentTime = moment();
    const sessionStart = moment(item.nhom_thoi_gian[0], 'HH:mm');
    const openingEnd = sessionStart.clone().add(Number(item.dbevn_product_time_invest), 'minutes');
    return currentTime.isBetween(sessionStart, openingEnd);
  };

  const investing = (pj_id, money, min) => {
    if (Number(auth.wallet) < Number(money)) {
      toast.error("Số tiền trong tài khoản không đủ");
    } else if (Number(money) < Number(min)) {
      toast.error("Số tiền đầu tư phải trên mức tối thiểu");
    } else {
      const data = {
        user_id: id,
        product_id: pj_id,
        total_invest: money,
      };
      dispatch(
        projectsInvest(data, () => {
          toast.success("Đầu tư thành công");
        })
      );
    }
  };

  return (
    <div className="container tabpj">
      <div className="tabHeader">
        <Slider
          {...settings}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          asNavFor={contentSlider.current}
          ref={tabSlider}
        >
          <div className="itemHeader">Tất cả</div>
          <div className="itemHeader">Sản phẩm phúc lợi</div>
          <div className="itemHeader">Khu vực VIP1</div>
          <div className="itemHeader">Khu VIP2</div>
          <div className="itemHeader">Khu VIP3</div>
        </Slider>
      </div>
      <div className="contentTab contentSlider">
        <Slider {...settings} ref={contentSlider}>
          <div className="itemsProject">
            {projects.map((item, index) => {
              if (item.nhom_sp.length < 1) {
                if (isCurrentSession(item.nhom_thoi_gian[0]))
                  return (
                    <div key={index} className="boxProject">
                      <div className="title">{item.title}</div>
                      {item.thumbnail ? (
                        <div className="image img-wrap mt-2">
                          <img
                            src={item.thumbnail}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      ) : (
                        " "
                      )}
                      {/* <div className="span position-absolute">
                        <div>
                          <span>Sản phẩm phúc lợi</span>
                        </div>
                        <div>
                          <span>Rất khuyến khích</span>
                        </div>
                      </div> */}
                      <div className="content">
                        <ul>
                          <li className="text-center">
                            <span>{item.dbevn_product_time_invest}phút</span>
                            <p>Thời gian đầu tư</p>
                          </li>
                          <li className="text-center">
                            <span>{item.dbevn_product_percent}%</span>
                            <p>Tỷ lệ lợi nhuận</p>
                          </li>
                          <li className="text-center">
                            <span>
                              {numeral(
                                (item.dbevn_product_min_invest *
                                  item.dbevn_product_percent) /
                                  100
                              )
                                .format("0,0")
                                .replaceAll(",", ".")}
                            </span>
                            <p>Tổng thu nhập</p>
                          </li>
                          <li className="text-center">
                            <span>
                              {numeral(item.dbevn_product_min_invest)
                                .format("0,0")
                                .replaceAll(",", ".")}
                            </span>
                            <p>Số tiền mua tối thiểu</p>
                          </li>
                        </ul>
                        <span className="note">
                          Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ
                          được hoàn trả khi kết thúc phiên
                        </span>
                        <div className="progressBar">
                          <label>tiến độ dự án:</label>
                        </div>
                        
                        {
                          (id && authpj) ? (isWithinOpeningTime(item)) ? (
                            authpj.some((elem) => elem.product_id == item.id) ? (
                              <button
                                className="btn btnStop"
                                disabled
                              >
                                Đã đầu tư
                              </button>
                            ) : (
                              <button
                                className="btn btnRegister"
                                onClick={() => setSelectedProduct(item)}
                              >
                                Đăng ký
                              </button>
                            ) 
                          ) : <button
                          className="btn btnStop"
                          disabled
                        >
                          Ngừng đăng ký
                        </button> : (
                            <a href="/authen" className="btn btnRegister">
                              Đăng nhập để giao dịch
                            </a>
                          )
                        }

                        <div className="countdown d-flex align-items-center justify-content-center">
                          <span className="textCountDown">Mua đếm ngược: </span>
                          <div className="countdownJS">
                            <span id="demo">
                              <Countdown
                                nextSessionTime={
                                  item.nhom_thoi_gian[0] == "21h"
                                    ? "9h"
                                    : item.nhom_thoi_gian[0] === "17h30"
                                    ? "21h"
                                    : "17h30"
                                }
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
          <div className="itemsProject">
            {projects.map((item, index) => {
              if (
                item.nhom_sp.some((item) => {
                  return item == "Sản phẩm phúc lợi";
                })
              ) {
                if (isCurrentSession(item.nhom_thoi_gian[0]))
                  return (
                    <div key={index} className="boxProject">
                      <div className="title">{item.title}</div>
                      {item.thumbnail ? (
                        <div className="image img-wrap mt-2">
                          <img
                            src={item.thumbnail}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      ) : (
                        " "
                      )}
                      {/* <div className="span position-absolute">
                      <div>
                        <span>Sản phẩm phúc lợi</span>
                      </div>
                      <div>
                        <span>Rất khuyến khích</span>
                      </div>
                    </div> */}
                      <div className="content">
                        <ul>
                          <li className="text-center">
                            <span>{item.dbevn_product_time_invest}phút</span>
                            <p>Thời gian đầu tư</p>
                          </li>
                          <li className="text-center">
                            <span>{item.dbevn_product_percent}%</span>
                            <p>Tỷ lệ lợi nhuận</p>
                          </li>
                          <li className="text-center">
                            <span>
                              {numeral(
                                (item.dbevn_product_min_invest *
                                  item.dbevn_product_percent) /
                                  100
                              )
                                .format("0,0")
                                .replaceAll(",", ".")}
                            </span>
                            <p>Tổng thu nhập</p>
                          </li>
                          <li className="text-center">
                            <span>
                              {numeral(item.dbevn_product_min_invest)
                                .format("0,0")
                                .replaceAll(",", ".")}
                            </span>
                            <p>Số tiền mua tối thiểu</p>
                          </li>
                        </ul>
                        <span className="note">
                          Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ
                          được hoàn trả khi kết thúc phiên
                        </span>
                        <div className="progressBar">
                          <label>tiến độ dự án:</label>
                        </div>
                        {
                          id ? (
                            authpj.some((elem) => elem.product_id !== item.id) ? (
                              <button
                                className="btn btnRegister"
                                onClick={() => setSelectedProduct(item)}
                              >
                                Đăng ký
                              </button>
                            ) : (
                              <button
                                className="btn btnStop"
                                onClick={() => setSelectedProduct(item)}
                                disabled
                              >
                                Đã đầu tư
                              </button>
                            )
                          ) : (
                            <a href="/authen" className="btn btnRegister">
                              Đăng nhập để giao dịch
                            </a>
                          )
                        }
                        <div className="countdown d-flex align-items-center justify-content-center">
                          <span className="textCountDown">Mua đếm ngược: </span>
                          <span id="demo">
                            <Countdown
                              nextSessionTime={
                                item.nhom_thoi_gian[0] == "21h"
                                  ? "9h"
                                  : item.nhom_thoi_gian[0] === "17h30"
                                  ? "21h"
                                  : "17h30"
                              }
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
          <div className="itemsProject">
            {auth &&
            (auth.rank === "VIP 1" ||
              auth.rank === "VIP 2" ||
              auth.rank === "VIP 3")
              ? projects.map((item, index) => {
                  if (
                    item.nhom_sp.some((item) => {
                      return item == "Khu VIP 1";
                    })
                  ) {
                    if (isCurrentSession(item.nhom_thoi_gian[0]))
                      return (
                        <div key={index} className="boxProject">
                          <div className="title">{item.title}</div>
                          {item.thumbnail ? (
                            <div className="image img-wrap mt-2">
                              <img
                                src={item.thumbnail}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          ) : (
                            " "
                          )}
                          {/* <div className="span position-absolute">
                          <div>
                            <span>Sản phẩm phúc lợi</span>
                          </div>
                          <div>
                            <span>Rất khuyến khích</span>
                          </div>
                        </div> */}
                          <div className="content">
                            <ul>
                              <li className="text-center">
                                <span>
                                  {item.dbevn_product_time_invest}phút
                                </span>
                                <p>Thời gian đầu tư</p>
                              </li>
                              <li className="text-center">
                                <span>{item.dbevn_product_percent}%</span>
                                <p>Tỷ lệ lợi nhuận</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(
                                    (item.dbevn_product_min_invest *
                                      item.dbevn_product_percent) /
                                      100
                                  )
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Tổng thu nhập</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(item.dbevn_product_min_invest)
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Số tiền mua tối thiểu</p>
                              </li>
                            </ul>
                            <span className="note">
                              Lợi nhuận được tính theo phút , vốn và lợi nhuận
                              sẽ được hoàn trả khi kết thúc phiên
                            </span>
                            <div className="progressBar">
                              <label>tiến độ dự án:</label>
                            </div>
                            {id ? (
                              <button
                                className="btn btnRegister "
                                onClick={() => setSelectedProduct(item)}
                              >
                                Đăng ký
                              </button>
                            ) : (
                              <a href="/authen" className="btn btnRegister ">
                                Đăng nhập để giao dịch
                              </a>
                            )}
                            <div className="countdown d-flex align-items-center justify-content-center">
                              <span className="textCountDown">
                                Mua đếm ngược:{" "}
                              </span>
                              <div className="countdownJS">
                                <span id="demo">
                                  <Countdown
                                    nextSessionTime={
                                      item.nhom_thoi_gian[0] == "21h"
                                        ? "9h"
                                        : item.nhom_thoi_gian[0] === "17h30"
                                        ? "21h"
                                        : "17h30"
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  }
                })
              : "Tài khoản của bạn cần đạt VIP 1"}
          </div>
          <div className="itemsProject">
            {auth && (auth.rank === "VIP 2" || auth.rank === "VIP 3")
              ? projects.map((item, index) => {
                  if (
                    item.nhom_sp.some((item) => {
                      return item == "Khu VIP 2";
                    })
                  ) {
                    if (isCurrentSession(item.nhom_thoi_gian[0]))
                      return (
                        <div key={index} className="boxProject">
                          <div className="title">{item.title}</div>
                          {item.thumbnail ? (
                            <div className="image img-wrap mt-2">
                              <img
                                src={item.thumbnail}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          ) : (
                            " "
                          )}
                          {/* <div className="span position-absolute">
                      <div>
                        <span>Sản phẩm phúc lợi</span>
                      </div>
                      <div>
                        <span>Rất khuyến khích</span>
                      </div>
                    </div> */}
                          <div className="content">
                            <ul>
                              <li className="text-center">
                                <span>
                                  {item.dbevn_product_time_invest}phút
                                </span>
                                <p>Thời gian đầu tư</p>
                              </li>
                              <li className="text-center">
                                <span>{item.dbevn_product_percent}%</span>
                                <p>Tỷ lệ lợi nhuận</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(
                                    (item.dbevn_product_min_invest *
                                      item.dbevn_product_percent) /
                                      100
                                  )
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Tổng thu nhập</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(item.dbevn_product_min_invest)
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Số tiền mua tối thiểu</p>
                              </li>
                            </ul>
                            <span className="note">
                              Lợi nhuận được tính theo phút , vốn và lợi nhuận
                              sẽ được hoàn trả khi kết thúc phiên
                            </span>
                            <div className="progressBar">
                              <label>tiến độ dự án:</label>
                            </div>
                            {id ? (
                              <button
                                className="btn btnRegister "
                                onClick={() => setSelectedProduct(item)}
                              >
                                Đăng ký
                              </button>
                            ) : (
                              <a href="/authen" className="btn btnRegister ">
                                Đăng nhập để giao dịch
                              </a>
                            )}
                            <div className="countdown d-flex align-items-center justify-content-center">
                              <span className="textCountDown">
                                Mua đếm ngược:{" "}
                              </span>
                              <div className="countdownJS">
                                <span id="demo">
                                  <Countdown
                                    nextSessionTime={
                                      item.nhom_thoi_gian[0] == "21h"
                                        ? "9h"
                                        : item.nhom_thoi_gian[0] === "17h30"
                                        ? "21h"
                                        : "17h30"
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  }
                })
              : "Tài khoản của bạn cần đạt VIP 2"}
          </div>
          <div className="itemsProject">
            {auth && auth.rank === "VIP 3"
              ? projects.map((item, index) => {
                  if (
                    item.nhom_sp.some((item) => {
                      return item == "Khu VIP 3";
                    })
                  ) {
                    if (isCurrentSession(item.nhom_thoi_gian[0]))
                      return (
                        <div key={index} className="boxProject">
                          <div className="title">{item.title}</div>
                          {item.thumbnail ? (
                            <div className="image img-wrap mt-2">
                              <img
                                src={item.thumbnail}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          ) : (
                            " "
                          )}
                          {/* <div className="span position-absolute">
                      <div>
                        <span>Sản phẩm phúc lợi</span>
                      </div>
                      <div>
                        <span>Rất khuyến khích</span>
                      </div>
                    </div> */}
                          <div className="content">
                            <ul>
                              <li className="text-center">
                                <span>
                                  {item.dbevn_product_time_invest}phút
                                </span>
                                <p>Thời gian đầu tư</p>
                              </li>
                              <li className="text-center">
                                <span>{item.dbevn_product_percent}%</span>
                                <p>Tỷ lệ lợi nhuận</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(
                                    (item.dbevn_product_min_invest *
                                      item.dbevn_product_percent) /
                                      100
                                  )
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Tổng thu nhập</p>
                              </li>
                              <li className="text-center">
                                <span>
                                  {numeral(item.dbevn_product_min_invest)
                                    .format("0,0")
                                    .replaceAll(",", ".")}
                                </span>
                                <p>Số tiền mua tối thiểu</p>
                              </li>
                            </ul>
                            <span className="note">
                              Lợi nhuận được tính theo phút , vốn và lợi nhuận
                              sẽ được hoàn trả khi kết thúc phiên
                            </span>
                            <div className="progressBar">
                              <label>tiến độ dự án:</label>
                            </div>
                            {id ? (
                              <button
                                className="btn btnRegister "
                                onClick={() => setSelectedProduct(item)}
                              >
                                Đăng ký
                              </button>
                            ) : (
                              <a href="/authen" className="btn btnRegister ">
                                Đăng nhập để giao dịch
                              </a>
                            )}
                            <div className="countdown d-flex align-items-center justify-content-center">
                              <span className="textCountDown">
                                Mua đếm ngược:{" "}
                              </span>
                              <div className="countdownJS">
                                <span id="demo">
                                  <Countdown
                                    nextSessionTime={
                                      item.nhom_thoi_gian[0] == "21h"
                                        ? "9h"
                                        : item.nhom_thoi_gian[0] === "17h30"
                                        ? "21h"
                                        : "17h30"
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  }
                })
              : "Tài khoản của bạn cần đạt VIP 3"}
          </div>
        </Slider>
      </div>
      <Modal
        isOpen={selectedProduct !== null}
        onRequestClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div>
            <h2>{selectedProduct.title}</h2>
            <CurrencyInput
              prefix="₫"
              allowDecimals={false}
              onValueChange={(value) => setInvestmentAmount(value)}
              value={investmentAmount}
            />
            <button
              onClick={() => {
                investing(
                  selectedProduct.id,
                  investmentAmount,
                  selectedProduct.dbevn_product_min_invest
                );
              }}
            >
              Đầu tư
            </button>
            <button
              onClick={() => {
                setInvestmentAmount("");
                setSelectedProduct(null);
              }}
            >
              Đóng
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Tabs;
