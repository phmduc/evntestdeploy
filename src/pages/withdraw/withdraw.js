import React, { Component, useState, useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/withdraw/withdraw.css";
import CurrencyInput from "react-currency-input-field";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import { withdrawCommand } from "~/redux/authentication/actionCreator";
import { useNavigate } from "react-router-dom";

function Withdraw () {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const dispatch = useDispatch()
  const id = sessionStorage.getItem("user_id")
  const phone = sessionStorage.getItem("phone")

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
    const data={
        user_id: id,
        value,
    }
    const checkpass={
      phone: phone,
      password: password
    }
    dispatch(withdrawCommand(data, checkpass))
}

  useEffect(() => {
    dispatch(getinfo(id));

  }, [dispatch, id]);
    return (
      // <FooterOnly>
      //   <div className="withdraw">
      //     <div className="position-relative">
      //       <span className="icon-left">
      //         <i class="bi bi-chevron-left"></i>
      //       </span>
      //       <h6>Rút tiền</h6>
      //     </div>

      //     <div className="main-content">
      //         {/* <div className="option-form">
      //           <div className="row">
      //             <div className="col-3 p-1 d-flex justify-space-between align-items-center">
      //               <div className="name">Rút tiền</div>
      //             </div>
      //             <div className="col-6 p-1 d-flex justify-space-between align-items-center">
      //               <div class="form-group">
      //                 <select class="form-control">
      //                   <option selected>
      //                     Vui lòng chọn phương thức thanh toán
      //                   </option>
      //                   <option>DongA Bank|123***********123</option>
      //                 </select>
      //               </div>
      //             </div>
      //             <div className="col-3 p-1 d-flex justify-space-between align-items-center">
      //               <a href="#">Thêm hình thức thanh toán</a>
      //             </div>
      //           </div>
      //         </div> */}

      //       <div className="option-form">
      //         <div className="row">
      //           <div className="col-3 p-1 d-flex justify-space-between align-items-center">
      //             <div className="name">Số tiền rút</div>
      //           </div>
      //           <div className="col-9 p-1 d-flex justify-space-between align-items-center">
      //           <CurrencyInput
      //             prefix="₫"
      //             className="withdraw"
      //             allowDecimals={false}
      //             onValueChange={(value) => setInvestmentAmount(value)}
      //             value={investmentAmount}
      //           />
      //           </div>
      //         </div>
      //       </div>

      //       <div className="option-form">
      //         <div className="row">
      //           <div className="col-3 p-1 d-flex justify-space-between align-items-center">
      //             <div className="name">Số tiền có thể rút</div>
      //           </div>
      //           <div className="col-9 p-1 d-flex justify-space-between align-items-center">
      //             <div className="amount"><span>{auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_can_cash ) : ''}</span></div>
      //           </div>
      //         </div>
      //       </div>
      //       {/* <div className="option-form">
      //         <div className="row">
      //           <div className="col-3 p-1 d-flex justify-space-between align-items-center">
      //             <div className="name">Mật khẩu giao dịch</div>
      //           </div>
      //           <div className="col-9 p-1 d-flex justify-space-between align-items-center">
      //             <input className="pass"
      //               type="password"
      //               placeholder="Xin vui lòng nhập mật khẩu"
      //             />
      //           </div>
      //         </div>
      //       </div> */}
      //     </div>

      //     <div className="butt">
      //     <button onClick={()=>{handleWithdraw(id, investmentAmount)}}>Đăng kí rút tiền</button>
      //     </div>
      //   </div>
      // </FooterOnly>
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
                  <span>Tổng tài sản</span>
                  <span className="d-block">
                     {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet ) : ''}
                  </span>
                  <span>Số tiền có thể rút</span>
                  <span className="d-block">
                     {auth ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(auth.wallet_can_cash ) : ''}
                  </span>
                </div>
                
                <div className="usable-right">
                  <a href="#">
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
        </FooterOnly>
    );
  }

export default Withdraw;
