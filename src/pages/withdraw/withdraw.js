import React, { Component, useState, useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/withdraw/withdraw.css";
import CurrencyInput from "react-currency-input-field";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import { withdrawCommand } from "~/redux/authentication/actionCreator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isNumeral } from "numeral";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

function Withdraw () {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const dispatch = useDispatch()
  const id = sessionStorage.getItem("user_id")
  const phone = sessionStorage.getItem("phone")
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

    tawkMessengerRef.current.setAttributes({
        name: `${numberPhone}`,
        content:  `Rút ${investmentAmount}`, 
    }, function(error) {
      console.log(error)
    });
      tawkMessengerRef.current.hideWidget();

};
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
  const [password, setPassword] = useState(0);


  const handleItemClick = (index) => {
    setActiveIndex(index);
    setInvestmentAmount(items[index].value)
  };

  const handleWithdraw =(id, value)=>{
    if(investmentAmount && password){
      const data={
        user_id: id,
        value,
      }
      const checkpass={
        phone: phone,
        password: password
      }
      dispatch(withdrawCommand(data, checkpass, ()=>{onLoad()
        tawkMessengerRef.current.maximize();
    }))
    }
    
   
 
}

  useEffect(() => {
    dispatch(getinfo(id));

  }, [dispatch, id]);
    return (
          <FooterOnly>
          <div className="recharge">
            <div className="position-relative">
              <button  onClick={goBack} className="icon-left">
                <i class="bi bi-chevron-left"></i>
              </button>
              <h6>Rút tiền</h6>
            </div>
  
            <div className="main-content">
              <div className="usable d-flex justify-space-around align-items-center">
                <div className="usable-left">
                  <span>Số tiền có thể rút</span>
                  <span className="d-block">
                     {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_can_cash ) : ''}
                  </span>
                </div>
                
                <div className="usable-right">
                  <a href="/profile/record">
                    Nhật kí  >
                  </a>
                </div>
              </div>
  
              <div className="recharge-title">
                <div className="name">Rút tiền VND</div>
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
                      onValueChange={(value) =>{ setActiveIndex(-1); setInvestmentAmount(value)}}
                      value={investmentAmount}
                      placeholder="Vui lòng nhập số tiền"
                    />
                  </div>
                </div>
              </div>
              <div className="repass">
                <input placeholder="Nhập lại mật khẩu" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div className="link-btn"><a href="#" onClick={()=>{handleWithdraw(id, investmentAmount)}}>Rút tiền</a></div>
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

export default Withdraw;
