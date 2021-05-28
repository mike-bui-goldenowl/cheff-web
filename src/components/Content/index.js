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
              <S.Title style={{ margin: 0, padding: 0 }}>
                Ứng dụng Cheff
              </S.Title>
            </Row>
            
            <S.Content>Muốn ăn thì lăn vào Cheff</S.Content>
            <S.SubContent>
              Ăn thì dễ, nấu thì khó
              <br />
              Chớ mà cau có, đã có Cheff lo
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
