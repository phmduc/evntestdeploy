import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "~/pages/record/record.css";

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "recharge",
    };
  }

  handleTabSelect = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    const { activeTab } = this.state;
    return (
      <FooterOnly>
        <div className="record">
          <div className="headerRecord">
            <a href="# " className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title">Hồ sơ gửi và rút tiền</div>
          </div>
          <div className="recordTabs">
            <Tabs
              activeKey={activeTab}
              onSelect={this.handleTabSelect}
              id="uncontrolled-tab-example"
              className="mb-0"
            >
              <Tab eventKey="recharge" title="Nạp tiền">
                <div className="boxRechange d-flex align-items-center">
                  <div className="box1 text-center">
                    <div>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Nạp tiền</span>
                    </div>
                  </div>
                  <div className="box2 text-center">
                    <div>
                      <span>0</span>
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
                      <span>0</span>
                    </div>
                    <div>
                      <span>Rút tiền</span>
                    </div>
                  </div>
                  <div className="box2 text-center">
                    <div>
                      <span>0</span>
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
            <div className="text-center d-flex align-items-center">
              <div className="text">
                <span>Mã giao dịch</span>
              </div>
              <div className="text">
                <span>Số tiền nạp</span>
              </div>
              <div className="text">
                <span>Tình trạng nạp tiền</span>
              </div>
              <div className="text">
                <span>Xem thêm</span>
              </div>
            </div>
          </div>
          <div
            className={`boardFile boardWithdraw ${
              activeTab === "withdraw" ? "active" : ""
            }`}
          >
            <div className="text-center d-flex align-items-center">
              <div className="text">
                <span>Mã giao dịch</span>
              </div>
              <div className="text">
                <span>Số tiền rút</span>
              </div>
              <div className="text">
                <span>Tình trạng rút tiền</span>
              </div>
              <div className="text">
                <span>Xem thêm</span>
              </div>
            </div>{" "}
          </div>
          <div className="pagination"></div>
        </div>
      </FooterOnly>
    );
  }
}

export default Record;
