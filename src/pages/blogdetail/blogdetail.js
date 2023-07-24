import React, { Component } from "react";
import FooterOnly from "~/layouts/FooterOnly/FooterOnly.js";
import Tabs from "~/components/tabs/tabs";
import "~/pages/blogdetail/blogdetail.css";

class Blogdetail extends Component {
  render() {
    return (
      <FooterOnly>
        <div className="blogdetail">
          <div className="position-relative">
            <span className="icon-left"><i class="bi bi-chevron-left"></i></span>
            <h6>Chi tiết tin tức</h6>
          </div>
          <div className="content">
            <div className="name">Tập đoàn Điện lực Việt Nam </div>
            <p>
              Tập đoàn điện lực Việt Nam một công ty nhà nước, hoạt động chủ yếu
              trong lĩnh vực sản xuất điện, truyền tải điện, phân phối và bán
              điện. Tập đoàn Điện lực Việt Nam, để đảm bảo cung cấp điện trong
              mùa hè nắng nóng, Tập đoàn sẽ đôn đốc các đơn vị trực thuộc và các
              công ty điện lực nghiêm túc xúc tiến việc triển khai các phương án
              dự án lưới điện đảm bảo 202. Giới thiệu về chúng tôi: Tập đoàn
              Điện lực Việt Nam . Trong 4 tháng đầu năm 2022, Tập đoàn Điện lực
              Việt Nam và các đơn vị thành viên đã thực hiện tổng số 30 công
              trình kỹ thuật và hoàn thành 31 công trình lưới điện có cấp điện
              áp từ 110 kV đến 500 kV. Ngoài ra, Tập đoàn đã ban hành quy chế sử
              dụng nhật ký thi công điện tử và biên bản nghiệm thu điện tử trong
              các dự án đầu tư xây dựng. Tập đoàn Điện lực Việt Nam, đến tháng
              5/2022, mục tiêu hoạt động điện của Tập đoàn là đảm bảo tiêu thụ
              điện cho sản xuất và sinh hoạt, đặc biệt là nhu cầu điện phục vụ
              Đại hội thể thao Đông Nam Á lần thứ 31 và kỳ họp thứ ba Quốc hội
              khóa XV. Được sự chấp thuận đặc biệt của Hội đồng quản trị Tập
              đoàn Điện lực, giai đoạn đầu: Quỹ cổ phần tư nhân An ninh Điện lực
              Việt Nam được thành lập. Quỹ tư nhân này thu hút nguồn vốn tư nhân
              tham gia xây dựng các công trình công cộng quốc gia, trước tình
              hình dịch bệnh nghiêm trọng trên toàn cầu, nó sẽ kích thích GDP,
              tăng thu nhập của người dân, đáp ứng nhu cầu điện cơ bản của quốc
              gia.
            </p>
            <span>-end-</span>
          </div>
        </div>
      </FooterOnly>
    );
  }
}

export default Blogdetail;
