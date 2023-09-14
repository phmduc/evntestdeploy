import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/notification/notification.css";
import { useSelector, useDispatch } from "react-redux";
import { blogsGetData } from "~/redux/blogs/actionCreator";
import { categoriesGetData } from "~/redux/blogs/actionCreator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { readNotificationList } from "~/redux/notification/actionCreator";
import moment from "moment";

function Notification() {
  const dispatch = useDispatch();

  const { notification } = useSelector((state) => ({
    notification: state.notification.data,
  }));
  const navigate = useNavigate();
  const user_id = sessionStorage.getItem("user_id");
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(readNotificationList(user_id));
  }, [dispatch]);
  return (
    <FooterOnly>
      <div className="notifition">
        <div className="container">
          <div className="position-relative">
            <span onClick={goBack} className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Thông báo tài khoản</h6>
            <a className="icon-right" href="#">
              <span>
                <i class="bi bi-person-circle"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="container">
          <div className="main-content">
            <div className="list-item">
              {notification.length > 0
                ? notification.map((elem, index) => {
                  if(elem.trash == '0'){
                    if (index === 0) {
                      return (
                        <>
                          <span className="time">
                            {moment(elem.created).format("DD/MM/YYYY")}
                          </span>
                          <div className="item">
                            <span>
                              {elem.content} Thời gian { moment(elem.created).format(
                        "DD/MM/YYYY HH:mm:ss" 
                      )}
                            </span>
                            {elem.type == "tax" ? (
                              <div className={elem.type}>Thông báo thuế</div>
                            ) : elem.type == "insurance" ? (
                              <div className={elem.type}>
                                Thông báo bảo hiểm
                              </div>
                            ) : elem.type == "deposit" ? (
                              <div className={elem.type}>Nạp tiền</div>
                            ) : elem.type == "cashout" ? (
                              <div className={elem.type}>Rút tiền</div>
                            ) : elem.type == "verified" ? (
                              <div className={elem.type}>
                                Xác minh thành công{" "}
                              </div>
                            ) : elem.type == "locked" ? (
                              <div className={elem.type}>Tài khoản bị khoá</div>
                            ) : elem.type == "unlocked" ? (
                              <div className={elem.type}>Mở khoá tài khoản</div>
                            ) : elem.type == "warning" ?  (
                              <div className={elem.type}>Xác minh tài khoản nghi vấn</div>
                            ) : <div className={elem.type}>Thông báo đầu tư</div>}
                          </div>
                        </>
                      );
                    }
                    if (
                      moment(elem.created).format("DD/MM/YYYY") ===
                      moment(notification[index - 1].created).format(
                        "DD/MM/YYYY"
                      )
                    ) {
                      return (
                        <div className="item">
                          <span>
                            {elem.content} Thời gian { moment(elem.created).format(
                        "DD/MM/YYYY HH:mm:ss" 
                      )}
                          </span>
                          {elem.type == "tax" ? (
                              <div className={elem.type}>Thông báo thuế</div>
                            ) : elem.type == "insurance" ? (
                              <div className={elem.type}>
                                Thông báo bảo hiểm
                              </div>
                            ) : elem.type == "deposit" ? (
                              <div className={elem.type}>Nạp tiền</div>
                            ) : elem.type == "cashout" ? (
                              <div className={elem.type}>Rút tiền</div>
                            ) : elem.type == "verified" ? (
                              <div className={elem.type}>
                                Xác minh thành công{" "}
                              </div>
                            ) : elem.type == "locked" ? (
                              <div className={elem.type}>Tài khoản bị khoá</div>
                            ) : elem.type == "unlocked" ? (
                              <div className={elem.type}>Mở khoá tài khoản</div>
                            ) : elem.type == "warning" ?  (
                              <div className={elem.type}>Xác minh tài khoản nghi vấn</div>
                            ) : <div className={elem.type}>Thông báo đầu tư</div>}
                        </div>
                      );
                    } else {
                      return (
                        <>
                          <span className="time">
                            {moment(elem.created).format("DD/MM/YYYY")}
                          </span>
                          <div className="item">
                            <span>
                              {elem.content} Thời gian { moment(elem.created).format(
                        "DD/MM/YYYY HH:mm:ss" 
                      )}
                            </span>
                            {elem.type == "tax" ? (
                              <div className={elem.type}>Thông báo thuế</div>
                            ) : elem.type == "insurance" ? (
                              <div className={elem.type}>
                                Thông báo bảo hiểm
                              </div>
                            ) : elem.type == "deposit" ? (
                              <div className={elem.type}>Nạp tiền</div>
                            ) : elem.type == "cashout" ? (
                              <div className={elem.type}>Rút tiền</div>
                            ) : elem.type == "verified" ? (
                              <div className={elem.type}>
                                Xác minh thành công{" "}
                              </div>
                            ) : elem.type == "locked" ? (
                              <div className={elem.type}>Tài khoản bị khoá</div>
                            ) : elem.type == "unlocked" ? (
                              <div className={elem.type}>Mở khoá tài khoản</div>
                            ) : elem.type == "warning" ?  (
                              <div className={elem.type}>Xác minh tài khoản nghi vấn</div>
                            ) : <div className={elem.type}>Thông báo đầu tư</div>}
                          </div>
                        </>
                      );
                    }
                  }
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </FooterOnly>
  );
}

export default Notification;
