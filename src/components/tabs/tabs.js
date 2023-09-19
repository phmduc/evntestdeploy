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
  const [isrender, setisrender] = useState(false);

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
  }, [dispatch, isrender, id]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    asNavFor: tabSlider.current,
  };

  const isInvestDay = (pj) => {
    const test = authpj.filter((elem) => {
      return elem.product_id == pj.id;
    });
    if (test.length>0) {
      if (
        moment(test[test.length - 1].created).format("DD-MM-YYYY") ==
        moment().format("DD-MM-YYYY")
      ) {
        return true;
      } else return false;
    }
  };

  const isCurrentSession = (startTime, endTime) => {
    const now = moment();
    const sessionStart = moment("0h00", "HH:mm");
    const sessionEnd = moment(startTime, "HH:mm");

    return now.isBetween(sessionStart, sessionEnd);
  };

  const sortedItems = projects.sort((a, b) => {
    if (
      Number(a.dbevn_product_min_invest) < Number(b.dbevn_product_min_invest)
    ) {
      return -1;
    }
    if (
      Number(a.dbevn_product_min_invest) > Number(b.dbevn_product_min_invest)
    ) {
      return 1;
    }
    return 0;
  });

  const isWithinOpeningTime = (item) => {
    const currentTime = moment();
    const sessionStart = moment(item.nhom_thoi_gian[0], "HH:mm");

    const openingEnd = sessionStart
      .clone()
      .add(Number(item.dbevn_product_time_invest), "minutes");
    return {
      current: currentTime.isBetween(sessionStart, openingEnd),
      percent: Math.round(60 + Math.random() * 10),
    };
  };

  const investing = (pj_id, money, min) => {
    if (money) {
      const data = {
        user_id: id,
        product_id: pj_id,
        total_invest: money,
      };
      dispatch(
        projectsInvest(data, () => {
          setSelectedProduct(null);
          window.location.href='/'
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
                        Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                        hoàn trả khi kết thúc phiên
                      </span>
                      <div className="progressBar">
                        <label>tiến độ dự án:</label>
                        <ProgressBar
                          now={
                            isWithinOpeningTime(item).percent > 100
                              ? "100"
                              : isWithinOpeningTime(item).percent < 0
                              ? "0"
                              : isWithinOpeningTime(item).percent
                          }
                          label={
                            isWithinOpeningTime(item).percent > 100
                              ? "100%"
                              : isWithinOpeningTime(item).percent < 0
                              ? "0% Chưa bắt đầu"
                              : isWithinOpeningTime(item).percent + "%"
                          }
                        ></ProgressBar>
                      </div>

                      {id && authpj ? (
                       isWithinOpeningTime(item).current ?  !isInvestDay(item) ? (
                          <button
                            className="btn btnRegister"
                            onClick={() => setSelectedProduct(item)}
                          >
                            Đăng ký
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Đã đăng ký hôm nay
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Ngừng đăng ký
                          </button>
                        )
                      ) : (
                        <a href="/authen" className="btn btnRegister">
                          Đăng nhập để giao dịch
                        </a>
                      )}

                      <div className="countdown d-flex align-items-center justify-content-center">
                        <span className="textCountDown">Mua đếm ngược: </span>
                        <div className="countdownJS">
                          <span id="demo">
                            {isCurrentSession(
                              item.nhom_thoi_gian[0],
                              item.dbevn_product_time_invest
                            ) ? (
                              <Countdown
                                nextSessionTime={item.nhom_thoi_gian[0]}
                                time={item.dbevn_product_time_invest}
                              />
                            ) : (
                              "Đã qua phiên"
                            )}
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
                        Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                        hoàn trả khi kết thúc phiên
                      </span>
                      <div className="progressBar">
                        <label>tiến độ dự án:</label>
                        <ProgressBar
                          now={
                            isWithinOpeningTime(item).percent > 100
                              ? "100"
                              : isWithinOpeningTime(item).percent < 0
                              ? "0"
                              : isWithinOpeningTime(item).percent
                          }
                          label={
                            isWithinOpeningTime(item).percent > 100
                              ? "100%"
                              : isWithinOpeningTime(item).percent < 0
                              ? "0% Chưa bắt đầu"
                              : isWithinOpeningTime(item).percent + "%"
                          }
                        ></ProgressBar>
                      </div>
                      {id && authpj ? (
                       isWithinOpeningTime(item).current ?  !isInvestDay(item) ? (
                          <button
                            className="btn btnRegister"
                            onClick={() => setSelectedProduct(item)}
                          >
                            Đăng ký
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Đã đăng ký hôm nay
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Ngừng đăng ký
                          </button>
                        )
                      ) : (
                        <a href="/authen" className="btn btnRegister">
                          Đăng nhập để giao dịch
                        </a>
                      )}
                      <div className="countdown d-flex align-items-center justify-content-center">
                        <span className="textCountDown">Mua đếm ngược: </span>
                        <div className="countdownJS">
                          <span id="demo">
                            {isCurrentSession(
                              item.nhom_thoi_gian[0],
                              item.dbevn_product_time_invest
                            ) ? (
                              <Countdown
                                nextSessionTime={item.nhom_thoi_gian[0]}
                                time={item.dbevn_product_time_invest}
                              />
                            ) : (
                              "Đã qua phiên"
                            )}
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
                            <ProgressBar
                              now={
                                isWithinOpeningTime(item).percent > 100
                                  ? "100"
                                  : isWithinOpeningTime(item).percent < 0
                                  ? "0"
                                  : isWithinOpeningTime(item).percent
                              }
                              label={
                                isWithinOpeningTime(item).percent > 100
                                  ? "100%"
                                  : isWithinOpeningTime(item).percent < 0
                                  ? "0% Chưa bắt đầu"
                                  : isWithinOpeningTime(item).percent + "%"
                              }
                            ></ProgressBar>
                          </div>

                          {id && authpj ? (
                       isWithinOpeningTime(item).current ?  !isInvestDay(item) ? (
                          <button
                            className="btn btnRegister"
                            onClick={() => setSelectedProduct(item)}
                          >
                            Đăng ký
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Đã đăng ký hôm nay
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Ngừng đăng ký
                          </button>
                        )
                      ) : (
                        <a href="/authen" className="btn btnRegister">
                          Đăng nhập để giao dịch
                        </a>
                      )}

                          <div className="countdown d-flex align-items-center justify-content-center">
                            <span className="textCountDown">
                              Mua đếm ngược:{" "}
                            </span>
                            <div className="countdownJS">
                              <span id="demo">
                                {isCurrentSession(
                                  item.nhom_thoi_gian[0],
                                  item.dbevn_product_time_invest
                                ) ? (
                                  <Countdown
                                    nextSessionTime={item.nhom_thoi_gian[0]}
                                    time={item.dbevn_product_time_invest}
                                  />
                                ) : (
                                  "Đã qua phiên"
                                )}
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
                            <ProgressBar
                              now={
                                isWithinOpeningTime(item).percent > 100
                                  ? "100"
                                  : isWithinOpeningTime(item).percent < 0
                                  ? "0"
                                  : isWithinOpeningTime(item).percent
                              }
                              label={
                                isWithinOpeningTime(item).percent > 100
                                  ? "100%"
                                  : isWithinOpeningTime(item).percent < 0
                                  ? "0% Chưa bắt đầu"
                                  : isWithinOpeningTime(item).percent + "%"
                              }
                            ></ProgressBar>
                          </div>
                          {id && authpj ? (
                       isWithinOpeningTime(item).current ?  !isInvestDay(item) ? (
                          <button
                            className="btn btnRegister"
                            onClick={() => setSelectedProduct(item)}
                          >
                            Đăng ký
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Đã đăng ký hôm nay
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Ngừng đăng ký
                          </button>
                        )
                      ) : (
                        <a href="/authen" className="btn btnRegister">
                          Đăng nhập để giao dịch
                        </a>
                      )}

                          <div className="countdown d-flex align-items-center justify-content-center">
                            <span className="textCountDown">
                              Mua đếm ngược:{" "}
                            </span>
                            <div className="countdownJS">
                              <span id="demo">
                                {isCurrentSession(
                                  item.nhom_thoi_gian[0],
                                  item.dbevn_product_time_invest
                                ) ? (
                                  <Countdown
                                    nextSessionTime={item.nhom_thoi_gian[0]}
                                    time={item.dbevn_product_time_invest}
                                  />
                                ) : (
                                  "Đã qua phiên"
                                )}
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
                            <ProgressBar
                              now={
                                isWithinOpeningTime(item).percent > 100
                                  ? "100"
                                  : isWithinOpeningTime(item).percent < 0
                                  ? "0"
                                  : isWithinOpeningTime(item).percent
                              }
                              label={
                                isWithinOpeningTime(item).percent > 100
                                  ? "100%"
                                  : isWithinOpeningTime(item).percent < 0
                                  ? "0% Chưa bắt đầu"
                                  : isWithinOpeningTime(item).percent + "%"
                              }
                            ></ProgressBar>
                          </div>

                          {id && authpj ? (
                       isWithinOpeningTime(item).current ?  !isInvestDay(item) ? (
                          <button
                            className="btn btnRegister"
                            onClick={() => setSelectedProduct(item)}
                          >
                            Đăng ký
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Đã đăng ký hôm nay
                          </button>
                        ) : (
                          <button className="btn btnStop" disabled>
                            Ngừng đăng ký
                          </button>
                        )
                      ) : (
                        <a href="/authen" className="btn btnRegister">
                          Đăng nhập để giao dịch
                        </a>
                      )}
                          <div className="countdown d-flex align-items-center justify-content-center">
                            <span className="textCountDown">
                              Mua đếm ngược:{" "}
                            </span>
                            <div className="countdownJS">
                              <span id="demo">
                                {isCurrentSession(
                                  item.nhom_thoi_gian[0],
                                  item.dbevn_product_time_invest
                                ) ? (
                                  <Countdown
                                    nextSessionTime={item.nhom_thoi_gian[0]}
                                    time={item.dbevn_product_time_invest}
                                  />
                                ) : (
                                  "Đã qua phiên"
                                )}
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
