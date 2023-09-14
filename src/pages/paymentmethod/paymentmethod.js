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
                    value: "Ngân hàng ACB",
                    label: "Ngân hàng ACB",
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
                    value: "BIDV",
                    label: "BIDV",
                  },
                  {
                    value: "Eximbank",
                    label: "Eximbank",
                  },
                  {
                    value: "Ngân hàng Trung ương Châu Á",
                    label: "Ngân hàng Trung ương Châu Á",
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
                    value: "VPBank",
                    label: "VPBank",
                  },
                  {
                    value: "Military Commercial Joint Stock Bank",
                    label: "Military Commercial Joint Stock Bank",
                  },
                  {
                    value: "TPBank",
                    label: "TPBank",
                  },
                  {
                    value: "Agribank",
                    label: "Agribank",
                  },
                  {
                    value: "LietVietPostBank",
                    label: "LietVietPostBank",
                  },
                  {
                    value: "SHB Bank",
                    label: "SHB Bank",
                  },
                  {
                    value: "PVcomBank",
                    label: "PVcomBank",
                  },
                  {
                    value: "Saigon Bank",
                    label: "Saigon Bank",
                  },
                  {
                    value: "SeABank",
                    label: "SeABank",
                  },
                  {
                    value: "KienlongBank",
                    label: "KienlongBank",
                  },
                  {
                    value: "Nam Á Bank",
                    label: "Nam Á Bank",
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
                    value: "VIB Bank",
                    label: "VIB Bank",
                  },
                  {
                    value: "Ngân hàng SCB",
                    label: "Ngân hàng SCB",
                  },
                  {
                    value: "SaigonBank",
                    label: "SaigonBank",
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
                    value: "VietBank",
                    label: "VietBank",
                  },
                  {
                    value: "PG Bank",
                    label: "PG Bank",
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
                    value: "VIP Bank",
                    label: "VIP Bank",
                  },
                  {
                    value: "PCcombank",
                    label: "PCcombank",
                  },
                  {
                    value: "Ngân hàng An Binh",
                    label: "Ngân hàng An Binh",
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
