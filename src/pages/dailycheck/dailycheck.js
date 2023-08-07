import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/dailycheck/dailycheck.css";
import { useNavigate } from "react-router-dom";

function DailyCheck() {
  
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <FooterOnly>
      <div className="dailycheck">
        <div className="position-relative">
          <button onClick={goBack} className="icon-left">
            <i class="bi bi-chevron-left"></i>
          </button>
          <h6>Điểm danh hằng ngày</h6>
        </div>

        <div className="main-daily">
          <button>Đăng nhập ngày hôm nay</button>
        </div>
      </div>
    </FooterOnly>
  );
}

export default DailyCheck;
