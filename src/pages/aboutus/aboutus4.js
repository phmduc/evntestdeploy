import React, { Component } from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import '~/pages/aboutus/aboutus.css'

function AboutUs4 () {
    return (
        <FooterOnly>
          <div className='aboutus'>
           <div className='container'>
              <h6>Quy tắc rút tiền</h6>
              <div className='content'>
              <p><font face="Arial"><b>▲ Quy tắc rút tiền:</b><br/><br/><b>1. Thời gian rút tiền</b>: 9:00-22:00 hàng ngày<br/><br/><b>2. Số tiền rút tối đa:</b>Có các số tiền khác nhau tùy theo thẻ ngân hàng và phương thức rút tiền mà người dùng lựa chọn, vui lòng tham khảo lời nhắc trên trang khi rút tiền.<br/><br/><b>3.Số tiền rút tối thiểu:</b> Để tránh rút tiền mặt độc hại, rút tối thiểu cho nền tảng quản lý tài sản trực tuyến của EVN&nbsp; là 100.000 đồng.Nạp tối thiểu là 1.000.000 đồng<br/><br/><b>4. Thời gian rút và đến:</b> Sau khi rút tiền thành công, thông thường tiền sẽ về tài khoản trong vòng 24 giờ, và sẽ hoãn lại vào các ngày cuối tuần. Nếu tài khoản quá hạn, vui lòng kiểm tra chi tiết tài khoản của thẻ ngân hàng và số dư trong trung tâm cá nhân đã được trả lại chưa.<br/><br/>5. Nếu bạn có bất kỳ câu hỏi nào trong quá trình rút tiền, vui lòng liên hệ với bộ phận chăm sóc khách hàng trực tuyến.<br/><br/><b>▲ Quy trình rút tiền:</b><br/><br/>1. Đăng nhập vào nền tảng&nbsp; trực tuyến EVN<br/><br/>2. Vào trung tâm cá nhân và nhấp vào nút rút tiền<br/><br/>3. Nếu chưa liên kết tài khoản ngân hàng,quý khách vui lòng liên kết tài khoản ngân hàng trước<br/><br/><br/>4. Điền số tiền rút và nhấp vào xác nhận để gửi xác nhận<br/><br/><br/>5. Chuyển tiền vào tài khoản ngân hàng được chỉ định thông qua kiểm toán</font></p>
              </div>
           </div>
          </div>
        </FooterOnly>
    );
}

export default AboutUs4;