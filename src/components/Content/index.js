import { Row, Col } from "antd";
import { lazy } from "react";
import { withTranslation } from "react-i18next";

import * as S from "./styles";
const Container = lazy(() => import("../../common/Container"));

const Content = ({ t, id }) => {
  return (
    <S.Block
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "url(/img/1.png)",
      }}
    >
      <Container>
        <Row type="flex" justify="space-between" align="middle" id={id}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <img
              src={`/img/2.png`}
              alt={`/img/2.png`}
              with={346}
              height={560}
            />
          </Col>
          <S.Spacing />
          <Col lg={11} md={12} sm={24} xs={24}>
            <Row type="flex" align="middle">
              <img
                src={`/img/block_logo.png`}
                alt={`/img/block_logo.png`}
                with={70}
                height={70}
              />
              <S.Spacing />
              <S.Spacing />
              <S.Spacing />
              <S.Title style={{ margin: 0, padding: 0 }}>Cheff App</S.Title>
            </Row>
            <S.Content>Lorem ipsum dolor sit amet</S.Content>
            <S.SubContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </S.SubContent>
            <Row>
              <img
                src={`/img/3.png`}
                alt={`/img/3.png`}
                with={130}
                height={50}
              />
              <S.Spacing />
              <img
                src={`/img/4.png`}
                alt={`/img/4.png`}
                with={130}
                height={50}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </S.Block>
  );
};

export default withTranslation()(Content);
