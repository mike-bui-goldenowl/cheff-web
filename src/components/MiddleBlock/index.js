import { lazy } from "react";
import { Col } from "antd";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));

const MiddleBlock = ({ title, content, button, section, t }) => {
  return (
    <Container>
      <Col style={{ textAlign: "center", padding: "5rem 0" }}>
        <S.Title>{t(title)}</S.Title>
        <S.SubTitle>{t(content)}</S.SubTitle>
        <S.ServiceWrapper>
          {section.map((item, id) => {
            return (
              <S.ServiceItem key={id}>
                <img src={item.icon} alt={item.icon} with={60} height={60} />
                <Col>
                  <S.Circle>{id + 1}</S.Circle>
                </Col>
                <S.MinTitle>{t(item.title)}</S.MinTitle>
                <S.MinPara>{t(item.content)}</S.MinPara>
              </S.ServiceItem>
            );
          })}
        </S.ServiceWrapper>
      </Col>
    </Container>
  );
};

export default withTranslation()(MiddleBlock);
