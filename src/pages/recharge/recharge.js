import React, { Component, useEffect, useState } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/recharge/recharge.css";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from 'react-router-dom';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';
import { depCommand } from "~/redux/authentication/actionCreator";

function Recharge () {
  const tawkMessengerRef = useRef();

  const numberPhone = sessionStorage.getItem('phone')
  const onLoad = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const cookieName = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    // Example for setting name and email

    tawkMessengerRef.current.setAttributes({
        name: `${numberPhone}`,
        content:  `Nạp ${investmentAmount}`, 
    }, function(error) {
      console.log(error)
        // do something if error
    });
      tawkMessengerRef.current.hideWidget();

    console.log(document.querySelector('frame:nth-child(2)'))
};
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
  const handleLinkClick = () => {
    if(investmentAmount){
      onLoad()
      tawkMessengerRef.current.maximize();
  
      const data={
        user_id: id,
        value: investmentAmount,
      }
    
      dispatch(depCommand(data))
    }

  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setInvestmentAmount(items[index].value)
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
                <a href="/profile/record">
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

            <div className="link-btn" ><a href="#" onClick={(e)=>{ e.preventDefault(); handleLinkClick()}}>CSKH</a></div>
          </div>
        </div>
        <TawkMessengerReact
          propertyId="64ddda6094cf5d49dc6ae679"
          widgetId="1h819q2mu"
          onLoad={onLoad}
          ref={tawkMessengerRef}
          />
        
      </FooterOnly>
    );
  }

export default Recharge;
