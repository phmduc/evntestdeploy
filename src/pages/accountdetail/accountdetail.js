import React, { Component, useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import image from "~/assets/images/EVN-logo.9702d7df.webp"
import "~/pages/accountdetail/accountdetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import { withdrawCommand } from "~/redux/authentication/actionCreator";
import { useNavigate } from "react-router-dom";

function AccountDetail() {
  const dispatch = useDispatch()
  const id = sessionStorage.getItem("user_id")

  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  useEffect(() => {
    dispatch(getinfo(id));

  }, [dispatch, id]);
    return (
      <FooterOnly>
        <div className="accountdetail">
          <div className="position-relative">
            <span onClick={goBack} className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </span>
            <h6>Chi tiết tài khoản</h6>
          </div>

          <div className="main-content">
            <div className="card-bg"></div>

            <div className="list-item">
              <div className="card">
                <div className="card-info">
                  <div className="image">
                    <img src={image} />
                  </div>
                  <div className="info-title">
                    <span>Tổng tài sản</span>
                    <span>
                      <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet ) : ''}

                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <span>Tổng tiền nạp</span>
                <span>
                  <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_deposited ) : ''}
                </span>
              </div>
              <div className="item">
                <span>Tổng tiền rút</span>
                <span>
                  <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_cashed ) : ''}
                </span>
              </div>
              <div className="item">
                <span>Tổng tiền đầu tư</span>
                <span>
                  <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_buyed ) : ''}
                </span>
              </div>
              <div className="item">
                <span>Tổng lợi nhuận </span>
                <span>
                  <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_win ) : ''}
                </span>
              </div>
              <div className="item">
                <span>Số tiền có thể rút </span>
                <span>
                  <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_can_cash ) : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </FooterOnly>
    );
  }

export default AccountDetail;
