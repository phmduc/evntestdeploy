import React, { Component, useState, useEffect } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "~/pages/record/record.css";
import { withdrawCommandGet, depCommandGet } from "~/redux/authentication/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Record() {
  const [activeTab, setActiveTab] = useState('recharge')
  const id = sessionStorage.getItem('user_id')
  const { deps } = useSelector((state) => ({
    deps: state.deps.deps,
  }));
  const { commands } = useSelector((state) => ({
    commands: state.command.commands,
  }));
  


  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(withdrawCommandGet(id));
    dispatch(depCommandGet(id));

  },[dispatch])
  const handleTabSelect = (e) => {
    setActiveTab(e);
  };
    return (
      <FooterOnly>
        <div className="record">
          <div className="headerRecord">
            <a onClick={goBack} href="# " className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title">Hồ sơ gửi và rút tiền</div>
          </div>
          <div className="recordTabs">
            <Tabs
              activeKey={activeTab}
              onSelect={(e)=>{handleTabSelect(e)}}
              id="uncontrolled-tab-example"
              className="mb-0"
            >
              <Tab eventKey="recharge" title="Nạp tiền">
                <div className="boxRechange d-flex align-items-center">
                  <div className="box1 text-center">
                    <div>
                      <span>{deps ? deps.length : '0'}</span>
                    </div>
                    <div>
                      <span>Nạp tiền</span>
                    </div>
                  </div>
                  <div className="box2 text-center">
                    <div>
                      <span>{deps ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(deps.reduce((total, elem)=>{return total + Number(elem.value)},0)) : '0'}</span>
                    </div>
                    <div>
                      <span>Tích luỹ nạp tiền</span>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="withdraw" title="Rút tiền">
                <div className="boxWithdraw d-flex align-items-center">
                  <div className="box1 text-center">
                    <div>
                      <span>{commands ? commands.length : '0'}</span>
                    </div>
                    <div>
                      <span>Rút tiền</span>
                    </div>
                  </div>
                  <div className="box2 text-center">
                    <div>
                      <span>{commands ? Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(commands.reduce((total, elem)=>{return total + Number(elem.value)},0)) : '0'}</span>
                    </div>
                    <div>
                      <span>Tích luỹ rút tiền</span>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div
            className={`boardFile boardRechange ${
              activeTab === "recharge" ? "active" : ""
            }`}
          >
            <div className="text-center rowss d-flex align-items-center">
              <div className="text">
                <span>Mã giao dịch</span>
              </div>
              <div className="text">
                <span>Số tiền nạp</span>
              </div>
              <div className="text">
                <span>Tình trạng nạp tiền</span>
              </div>
            </div>
            {
            ( deps && deps.length > 0)
            ?
            [...deps].reverse().map((elem, index)=>{
              return(
                <div className="text-center rowss d-flex align-items-center">
                  <div className="text">
                    <span>{elem.id}</span>
                  </div>
                  <div className="text">
                    <span>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(elem.value)}</span>
                  </div>
                  <div className="text">
                    <span>{elem.status}</span>
                  </div>
                </div>
              )
            })
            :
            ''}
          </div>
          <div
            className={`boardFile boardWithdraw ${
              activeTab === "withdraw" ? "active" : ""
            }`}
          >
            <div className="text-center rowss d-flex align-items-center">
              <div className="text">
                <span>Mã giao dịch</span>
              </div>
              <div className="text">
                <span>Số tiền rút</span>
              </div>
              <div className="text">
                <span>Tình trạng rút tiền</span>
              </div>
            </div>{" "}
            {
            ( commands && commands.length > 0)
            ?
            [...commands].reverse().map((elem, index)=>{
              return(
                <div className="text-center rowss d-flex align-items-center">
                  <div className="text">
                    <span>{elem.id}</span>
                  </div>
                  <div className="text">
                    <span>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(elem.value)}</span>
                  </div>
                  <div className="text">
                    <span>{elem.status}</span>
                  </div>
                </div>
              )
            })
            :
            ''}
            
          </div>
          <div className="pagination"></div>
        </div>
      </FooterOnly>
    );
}

export default Record;
