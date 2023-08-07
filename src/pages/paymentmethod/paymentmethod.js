import React, { Component, useEffect, useState } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/paymentmethod/paymentmethod.css";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "~/redux/authentication/actionCreator";
import { withdrawCommand } from "~/redux/authentication/actionCreator";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Upload,
  Select,
  Button,
  Radio,
  Checkbox,
} from "antd";
import { addBank, removeBank } from "~/redux/authentication/actionCreator";

function PaymentMethod() {
  const dispatch = useDispatch();
  const id = sessionStorage.getItem("user_id");
  const [bank_name, setBankName] = useState("");
  const [render, setRender] = useState(false);
  const [bank_account, setBankAccount] = useState("");
  const { auth } = useSelector((state) => ({
    auth: state.auth.login,
  }));
  const navigate = useNavigate();
  const handleAddBank = ()=>{
    const data ={
      bank_name,
      bank_account
    }
    dispatch(addBank(id, data))
    setRender(!render)
  }

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getinfo(id));
  }, [dispatch, id, render]);
  return (
    <FooterOnly>
      <div className="paymentmethod">
        <div className="headerPayment">
          <a href="# " onClick={goBack} className="iconBack">
            <i class="bi bi-chevron-left"></i>
          </a>
          <div className="title text-center">
            Phương thức thanh toán của tôi
          </div>
        </div>
          <div className="showBank d-flex flex-column">
            <div className="nameBank">
              <span>{auth ? auth.bank_name : ""}</span>
            </div>
            <div className="number">
              <span>{auth ? auth.bank_account : ""}</span>
            </div>
           
          </div>
          <div className="form">
            <Form.Item
              name="bank"
              label="Tên ngân hàng"
              initialValue={bank_name}
            >
              <Select
                onChange={(e) => {
                  setBankName(e);
                }}
                showSearch
                style={{
                  width: "100%",
                  marginLeft: 0,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "Techcombank",
                    label: "Techcombank",
                  },
                  {
                    value: "Sacombank",
                    label: "Sacombank",
                  },
                  {
                    value: "Vietcombank",
                    label: "Vietcombank",
                  },
                  {
                    value: "Asia Commercial Bank",
                    label: "Asia Commercial Bank",
                  },
                  {
                    value: "DongA Bank",
                    label: "DongA Bank",
                  },
                  {
                    value: "Vietin Bank",
                    label: "Vietin Bank",
                  },
                  {
                    value: "Bank for Investment and Development of Vietnam",
                    label: "Bank for Investment and Development of Vietnam",
                  },
                  {
                    value: "Eximbank",
                    label: "Eximbank",
                  },
                  {
                    value: "Bank Central Asia",
                    label: "Bank Central Asia",
                  },
                  {
                    value: "Bank Negara Indonesia",
                    label: "Bank Negara Indonesia",
                  },
                  {
                    value: "Bank Rakyat Indonesia",
                    label: "Bank Rakyat Indonesia",
                  },
                  {
                    value: "CIMB Niaga",
                    label: "CIMB Niaga",
                  },
                  {
                    value: "Vietnam Prosperity Joint-Stock Commercial Bank",
                    label: "Vietnam Prosperity Joint-Stock Commercial Bank",
                  },
                  {
                    value: "Military Commercial Joint Stock Bank",
                    label: "Military Commercial Joint Stock Bank",
                  },
                  {
                    value: "Tien Phong Commercial",
                    label: "Tien Phong Commercial",
                  },
                  {
                    value: "Agribank",
                    label: "Agribank",
                  },
                  {
                    value: "Lien Viet Post Joint Stock Commercial Bank",
                    label: "Lien Viet Post Joint Stock Commercial Bank",
                  },
                  {
                    value: "Saigon - Hanoi Commercial Joint Stock Bank",
                    label: "Saigon - Hanoi Commercial Joint Stock Bank",
                  },
                  {
                    value: "Vietnam Public Joint-stock Commercial Bank",
                    label: "Vietnam Public Joint-stock Commercial Bank",
                  },
                  {
                    value: "Saigon Bank",
                    label: "Saigon Bank",
                  },
                  {
                    value: "Southeast Asia Commercial Joint Stock Bank",
                    label: "Southeast Asia Commercial Joint Stock Bank",
                  },
                  {
                    value: "Kien Long Commercial Joint Stock Bank",
                    label: "Kien Long Commercial Joint Stock Bank",
                  },
                  {
                    value: "Nam A Commercial Joint Stock Bank",
                    label: "Nam A Commercial Joint Stock Bank",
                  },
                  {
                    value: "National Citizen Commercial Joint Stock Bank",
                    label: "National Citizen Commercial Joint Stock Bank",
                  },
                  {
                    value: "HD Bank",
                    label: "HD Bank",
                  },
                  {
                    value: "Orient Commercial Joint Stock Bank",
                    label: "Orient Commercial Joint Stock Bank",
                  },
                  {
                    value: "Vietnam International Commercial Joint Stock Bank",
                    label: "Vietnam International Commercial Joint Stock Bank",
                  },
                  {
                    value: "Sai Gon Joint Stock Commercial Bank",
                    label: "Sai Gon Joint Stock Commercial Bank",
                  },
                  {
                    value: "Saigon Bank for Industry and Trade",
                    label: "Saigon Bank for Industry and Trade",
                  },
                  {
                    value: "VietABank",
                    label: "VietABank",
                  },
                  {
                    value: "Bao Viet Bank",
                    label: "Bao Viet Bank",
                  },
                  {
                    value: "Vietnam Thuong Tin Commercial Joint Stock Bank",
                    label: "Vietnam Thuong Tin Commercial Joint Stock Bank",
                  },
                  {
                    value: "Petrolimex Group Commercial Joint Stock Bank",
                    label: "Petrolimex Group Commercial Joint Stock Bank",
                  },
                  {
                    value: "BIDV",
                    label: "BIDV",
                  },
                  {
                    value: "MB Bank",
                    label: "MB Bank",
                  },
                  {
                    value: "SeaBank",
                    label: "SeaBank",
                  },
                  {
                    value: "Shinhan bank",
                    label: "Shinhan bank",
                  },
                  {
                    value: "ACB Bank",
                    label: "ACB Bank",
                  },
                  {
                    value: "VIP Bank",
                    label: "VIP Bank",
                  },
                  {
                    value: "PCcombank",
                    label: "PCcombank",
                  },
                  {
                    value: "VIB Bank",
                    label: "VIB Bank",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="account"
              label="Số tài khoản"
            >
            <Input placeholder="Nhập số tài khoản ngân hàng" value={bank_account} onChange={(e)=>{setBankAccount(e.target.value)}}/>
            </Form.Item>
            <a href="# " onClick={()=>{handleAddBank()}} className=" addBank text-center d-block">
             {auth && auth.bank_account && auth.bank_name ? 'Thay đổi tài khoản ngân hàng' : 'Thêm thẻ ngân hàng'} 
            </a>
          </div>
        <div className="note">
          Mẹo: Nếu không tìm thấy thẻ ngân hàng trước đó, đó là do nền tảng
          thanh toán đã được chuyển đổi và thẻ ngân hàng cần được thêm lại.
        </div>
      </div>
    </FooterOnly>
  );
}

export default PaymentMethod;
