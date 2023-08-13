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
  }, [dispatch,isrender, id]);
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
    if (startTime === "10h10") {
      sessionEnd = sessionStart.clone().add(6, "hours"); // 10h10 đến 16h10
    } else if (startTime === "16h10") {
      sessionEnd = sessionStart.clone().add(5, "hours").add(5, "minutes"); // 16h10 đến 21h1515
    } else if (startTime === "21h15") {
      sessionEnd = sessionStart.clone().add(12, "hours").add(55, "minutes"); // 21h1515 đến 10h10
    }
    return now.isBetween(sessionStart, sessionEnd);
  };

  const sortedItems = projects.sort((a, b) => {
    if (
      isCurrentSession(a.nhom_thoi_gian[0]) &&
      !isCurrentSession(b.nhom_thoi_gian[0])
    ) {
      return -1;
    }
    if (
      !isCurrentSession(a.nhom_thoi_gian[0]) &&
      isCurrentSession(b.nhom_thoi_gian[0])
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
    return {current: currentTime.isBetween(sessionStart, openingEnd), percent: Math.round((Number(currentTime) - Number(sessionStart))/ (Number(openingEnd) - Number(sessionStart)) * 100) };
  };

  const investing = (pj_id, money, min) => {
    if (Number(auth.wallet) < Number(money) && Number(auth.wallet_can_cash) < Number(money) ) {
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
          setisrender(!isrender);
          setSelectedProduct(null)
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
                        Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                        hoàn trả khi kết thúc phiên
                      </span>
                      <div className="progressBar">
                        <label>tiến độ dự án:</label>
                        <ProgressBar now={(isWithinOpeningTime(item).percent > 100) ? '100' : (isWithinOpeningTime(item).percent < 0) ? '0' : isWithinOpeningTime(item).percent} label={(isWithinOpeningTime(item).percent > 100) ? '100%' : (isWithinOpeningTime(item).percent < 0) ? '0% Chưa bắt đầu' : isWithinOpeningTime(item).percent+'%'} ></ProgressBar>
                      </div>
                      
                      {
                      id && authpj ? (
                        isWithinOpeningTime(item).current ? (
                          authpj.some((elem) => elem.product_id == item.id) ? (
                            <button className="btn btnStop" disabled>
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
                          {isCurrentSession(item.nhom_thoi_gian[0]) ? (
                              <Countdown
                                nextSessionTime={
                                  item.nhom_thoi_gian[0] == "21h15"
                                    ? "10h15"
                                    : item.nhom_thoi_gian[0] === "16h10"
                                    ? "21h15"
                                    : "16h10"
                                }
                              />
                            ) : isWithinOpeningTime(item).percent > 100 ? (
                              "Đã qua phiên"
                            ) : 'Chưa đến phiên'}
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
                        Lợi nhuận được tính theo phút , vốn và lợi nhuận sẽ được
                        hoàn trả khi kết thúc phiên
                      </span>
                      <div className="progressBar">
                        <label>tiến độ dự án:</label>
                        <ProgressBar now={(isWithinOpeningTime(item).percent > 100) ? '100' : (isWithinOpeningTime(item).percent < 0) ? '0' : isWithinOpeningTime(item).percent} label={(isWithinOpeningTime(item).percent > 100) ? '100%' : (isWithinOpeningTime(item).percent < 0) ? '0% Chưa bắt đầu' : isWithinOpeningTime(item).percent+'%'} ></ProgressBar>
                      </div>

                      {id && authpj ? (
                        isWithinOpeningTime(item).current ? (
                          authpj.some((elem) => elem.product_id == item.id) ? (
                            <button className="btn btnStop" disabled>
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
                            {isCurrentSession(item.nhom_thoi_gian[0]) ? (
                              <Countdown
                                nextSessionTime={
                                  item.nhom_thoi_gian[0] == "21h15"
                                    ? "10h15"
                                    : item.nhom_thoi_gian[0] === "16h10"
                                    ? "21h15"
                                    : "16h10"
                                }
                              />
                            ) : isWithinOpeningTime(item).percent > 100 ? (
                              "Đã qua phiên"
                            ) : 'Chưa đến phiên'}
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
                            <ProgressBar now={(isWithinOpeningTime(item).percent > 100) ? '100' : (isWithinOpeningTime(item).percent < 0) ? '0' : isWithinOpeningTime(item).percent} label={(isWithinOpeningTime(item).percent > 100) ? '100%' : (isWithinOpeningTime(item).percent < 0) ? '0% Chưa bắt đầu' : isWithinOpeningTime(item).percent+'%'} ></ProgressBar>


                          </div>

                          {id && authpj ? (
                            isWithinOpeningTime(item).current ? (
                              authpj.some(
                                (elem) => elem.product_id == item.id
                              ) ? (
                                <button className="btn btnStop" disabled>
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
                                {isCurrentSession(item.nhom_thoi_gian[0]) ? (
                                  <Countdown
                                    nextSessionTime={
                                      item.nhom_thoi_gian[0] == "21h15"
                                        ? "10h15"
                                        : item.nhom_thoi_gian[0] === "16h10"
                                        ? "21h15"
                                        : "16h10"
                                    }
                                  />
                                ) : (
                                  "Chưa đến phiên"
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
                            <ProgressBar now={(isWithinOpeningTime(item).percent > 100) ? '100' : (isWithinOpeningTime(item).percent < 0) ? '0' : isWithinOpeningTime(item).percent} label={(isWithinOpeningTime(item).percent > 100) ? '100%' : (isWithinOpeningTime(item).percent < 0) ? '0% Chưa bắt đầu' : isWithinOpeningTime(item).percent+'%'} ></ProgressBar>

                          </div>

                          {id && authpj ? (
                            isWithinOpeningTime(item).current ? (
                              authpj.some(
                                (elem) => elem.product_id == item.id
                              ) ? (
                                <button className="btn btnStop" disabled>
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
                              {isCurrentSession(item.nhom_thoi_gian[0]) ? (
                              <Countdown
                                nextSessionTime={
                                  item.nhom_thoi_gian[0] == "21h15"
                                    ? "10h15"
                                    : item.nhom_thoi_gian[0] === "16h10"
                                    ? "21h15"
                                    : "16h10"
                                }
                              />
                            ) : isWithinOpeningTime(item).percent > 100 ? (
                              "Đã qua phiên"
                            ) : 'Chưa đến phiên'}
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
                           <ProgressBar now={(isWithinOpeningTime(item).percent > 100) ? '100' : (isWithinOpeningTime(item).percent < 0) ? '0' : isWithinOpeningTime(item).percent} label={(isWithinOpeningTime(item).percent > 100) ? '100%' : (isWithinOpeningTime(item).percent < 0) ? '0% Chưa bắt đầu' : isWithinOpeningTime(item).percent+'%'} ></ProgressBar>

                          </div>

                          {id && authpj ? (
                            isWithinOpeningTime(item).current ? (
                              authpj.some(
                                (elem) => elem.product_id == item.id
                              ) ? (
                                <button className="btn btnStop" disabled>
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
                              {isCurrentSession(item.nhom_thoi_gian[0]) ? (
                              <Countdown
                                nextSessionTime={
                                  item.nhom_thoi_gian[0] == "21h15"
                                    ? "10h15"
                                    : item.nhom_thoi_gian[0] === "16h10"
                                    ? "21h15"
                                    : "16h10"
                                }
                              />
                            ) : isWithinOpeningTime(item).percent > 100 ? (
                              "Đã qua phiên"
                            ) : 'Chưa đến phiên'}
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
