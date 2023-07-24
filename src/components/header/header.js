import React, { Component } from "react";
import "~/components/header/header.css";
import imgLogo from "~/assets/images/EVN-logo.9702d7df.webp";

class Header extends Component {
  render() {
    return (
      <div className="headerLogo">
        <img src={imgLogo} alt="" className="img-fluid" />
      </div>
    );
  }
}

export default Header;
