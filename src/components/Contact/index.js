import { Col } from "antd";

import * as S from "./styles";
const content = {
  title: "CÔNG TY TNHH TƯ VẤN CON CÚ VÀNG ",
  items: [
    "- Địa chỉ trụ sở: Tòa nhà MBAMC, Tầng 07, Số 538 Cách Mạng Tháng Tám, Phường 11, Quận 3, Thành Phố Hồ Chí Minh",
    "- Số điện thoại: 028 38460098",
    "- Email liên hệ: admin@goldenowl.asia",
    "- Giấy chứng nhận đăng ký kinh doanh: 031345981028/09/2015 cấp tại Sở kế hoạch đầu tư Thành Phố Hồ Chí Minh",
  ],
};

const Contact = () => {
  return (
    <Col contentContainerStyle={{ paddingBottom: 20 }}>
      <S.Title>{content.title}</S.Title>
      {content.items.map((item) => (
        <S.Content>{item}</S.Content>
      ))}
    </Col>
  );
};

export default Contact;
