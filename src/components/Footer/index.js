import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import * as S from "./styles";

const Container = lazy(() => import("../../common/Container"));
const AppDownload = lazy(() => import("../../common/AppDownload"));

const Footer = () => {
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <img src={src} alt={src} width="36px" height="36px" />
        <S.Spacing />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer style={{ background: "black" }}>
          <Container>
            <Row type="flex" justify="space-between" align="middle">
              <S.LogoContainer>
                <img src={"/img/logo.png"} alt={"/img/logo.png"} />
              </S.LogoContainer>
              <Row>
                <SocialLink src={"/img/ic_insta.png"} />
                <SocialLink src={"/img/ic_twitter.png"} />
                <SocialLink src={"/img/ic_fb.png"} />
              </Row>
            </Row>
            <Row type="flex" justify="space-between">
              <Row align="top" span={20}>
                <Col style={{ marginRight: 20 }}>
                  <S.Large to="/">About us</S.Large>
                  <S.Large to="/">Features</S.Large>
                  <S.Large to="/">Our contact</S.Large>
                </Col>
                <Col>
                  <S.Large to="/">Get help</S.Large>
                  <S.Large to="/">Our policy</S.Large>
                </Col>
              </Row>
              <Col lg={8} md={8} sm={12} xs={24} align="right">
                <AppDownload />
              </Col>
            </Row>
          </Container>
        </S.Footer>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
