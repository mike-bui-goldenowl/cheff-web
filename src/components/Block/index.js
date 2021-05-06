import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Col } from "antd";
import { lazy } from "react";

import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));

const Block = ({ title, subTitle, backgroundUrl, content, id, height }) => {
  return (
    <S.Block id={id}>
      <Container>
        <S.BlockInner
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${backgroundUrl})`,
            minHeight: 400,
          }}
        >
          <Fade left>
            <Col lg={8} md={24} sm={24} xs={24}>
              <S.ContentWrapper>
                <S.Title>{title}</S.Title>
                <S.Content>{subTitle}</S.Content>
              </S.ContentWrapper>

              <S.Content>{content}</S.Content>
            </Col>
          </Fade>
        </S.BlockInner>
      </Container>
    </S.Block>
  );
};

export default withTranslation()(Block);
