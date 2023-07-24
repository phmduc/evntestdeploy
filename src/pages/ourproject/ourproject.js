import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import "~/pages/ourproject/ourproject.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class OurProject extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="ourproject">
          <div className="headerOurProject">
            <a href="# " className="iconBack">
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="title">Đầu tư của tôi</div>
          </div>
          <Tabs
            defaultActiveKey="tabOne"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="tabOne" title="Dự án đầu tư khả quan">
              Tab content for Home
            </Tab>
            <Tab eventKey="tabTwo" title="Dự án đã kết thúc">
              Tab content for Profile
            </Tab>
          </Tabs>
        </div>
      </FooterOnly>
    );
  }
}

export default OurProject;
