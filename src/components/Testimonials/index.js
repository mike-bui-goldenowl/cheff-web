import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {  Row } from "antd";
import { lazy } from "react";
import { StarFilled, RightOutlined, LeftOutlined } from "@ant-design/icons";
import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));

const data = [
  {
    id: 1,
    user: "Minh Trang",
    avatar:'/img/taylor.jpg',
    job:'Nhân viên văn phòng',
    content:
      "Giao diện vừa dễ nhìn lại dễ sử dụng. App này có nhiều công thức nấu ăn thuần Việt đi kèm hướng dẫn chi tiết.",
  },
  {
    id: 2,
    user: "Nguyễn Anh Thư",
    job: 'Giao dịch viên',
    avatar:'/img/leah.png',
    content:
      "Mình biết thêm được nhiều món ăn ngon thông qua ứng dụng Cheff này. Nhiều món mới lạ mà mình chưa nghe bao giờ, còn đi kèm hình ảnh rất sống động và bắt mắt nữa.",
  },
  {
    id: 3,
    user: "Vinh Nguyễn",
    job: 'Kĩ sư phần mềm',
    avatar:'/img/vincent.jpg',
    content:
      "Mình đã dùng và thấy rất thích app này. Mình còn giới thiệu cho người thân và bạn bè cùng sử dụng nữa. App này rất hữu ích với những người không biết nấu ăn như mình.",
  },
];

const Testimonials = ({ id }) => {
  return (
    <Container>
      <S.Block>
        <S.Title>Trải nghiệm người dùng</S.Title>

        <Row id={id} style={{ justifyContent: "center", alignItems: "center" }}>
          <Carousel
            style={{ display: "flex", justifyContent: "center" }}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <S.ButtonArrow onClick={onClickHandler} style={{ left: 15 }}>
                  <LeftOutlined />
                </S.ButtonArrow>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <S.ButtonArrow onClick={onClickHandler} style={{ right: 15 }}>
                  <RightOutlined />
                </S.ButtonArrow>
              )
            }
          >
            {data.map((item) => (
              <S.BlockContent
                key={item.id}
                
              >
              <S.ContentInner>
                <Row
                  style={{ justifyContent: "space-between", marginBottom: 15 }}
                >
                  <Row>
                    <img
                      src={item.avatar}
                      alt={item.avatar}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 80,
                        marginBottom: 10,
                      }}
                      with={130}
                      height={50}
                    />
                    <div style={{textAlign:'start', padding:'0.5rem 1.5rem'}}>
                    <S.MinTitle>{item.user}</S.MinTitle>
                    <span style={{opacity:0.75}}>{item.job}</span>
                    </div>
                  </Row>

                  <S.BlockStar>
                    <Row justify="center">
                      <StarFilled color="yellow" />
                      <StarFilled color="yellow" />
                      <StarFilled color="yellow" />
                      <StarFilled color="yellow" />
                      <StarFilled />
                    </Row>
                  </S.BlockStar>
                </Row>
                <S.Content>"{item.content}"</S.Content>
                </S.ContentInner>
              </S.BlockContent>
            ))}
          </Carousel>
        </Row>
      </S.Block>
    </Container>
  );
};

export default Testimonials;
