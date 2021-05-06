import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Col, Row } from "antd";
import { lazy } from "react";
import { StarFilled, RightOutlined, LeftOutlined } from "@ant-design/icons";
import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));

const data = [
  {
    id: 1,
    user: "Mr.Steve",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
  },
  {
    id: 2,
    user: "Mr.Mike",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
  },
];

const Testimonials = () => {
  return (
    <Container>
      <S.Block>
        <S.Title>WHAT PEOPLE SAY</S.Title>

        <Row>
          <Carousel
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
              <S.BlockContent key={item.id}>
                <Col>
                  <S.BlockStar>
                    <Row justify="center">
                      <StarFilled color="yellow" />
                      <StarFilled color="yellow" />
                      <StarFilled color="yellow" />
                      <StarFilled color="yellow" />
                      <StarFilled />
                    </Row>
                  </S.BlockStar>
                  <S.Content>{item.content}</S.Content>
                  <S.MinTitle>{item.user}</S.MinTitle>
                </Col>
              </S.BlockContent>
            ))}
          </Carousel>
        </Row>
      </S.Block>
    </Container>
  );
};

export default Testimonials;
