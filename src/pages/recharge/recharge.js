import React, { Component, useEffect, useState } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/recharge/recharge.css";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from 'react-router-dom';

function Recharge () {

  const id = sessionStorage.getItem('user_id')
  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const items = [
    { value: 500000 },
    { value: 1000000 },
    { value: 5000000 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getinfo(id));
  },[dispatch])
    return (
      <FooterOnly>
        <div className="recharge">
          <div className="position-relative">
            <button  onClick={goBack} className="icon-left">
              <i class="bi bi-chevron-left"></i>
            </button>
            <h6>Nạp tiền</h6>
          </div>

          <div className="main-content">
            <div className="usable d-flex justify-space-around align-items-center">
              <div className="usable-left">
                <span>Tổng tài sản</span>
                <span>
                  <u>đ</u> {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet ) : ''}
                </span>
              </div>
              <div className="usable-right">
                <a href="#">
                  Nhật kí nạp tiền >
                </a>
              </div>
            </div>

            <div className="recharge-title">
              <div className="name">Nạp tiền VND</div>
              <div className="list-recharge">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`item ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <span>{item.value}</span>
                </div>
              ))}
                <div className="item">
                  <CurrencyInput
                    prefix="₫"
                    className="withdraw"
                    allowDecimals={false}
                    onValueChange={(value) => setInvestmentAmount(value)}
                    value={investmentAmount}
                    placeholder="Vui lòng nhập số tiền"
                  />
                </div>
              </div>
            </div>

            <div className="link-btn"><a href="#">CSKH</a></div>
          </div>
        </div>
      </FooterOnly>
    );
  }

export default Recharge;
