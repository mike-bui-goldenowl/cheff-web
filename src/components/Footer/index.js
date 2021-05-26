import { lazy, Fragment, useState } from "react";
import { Row, Col, Modal } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import * as S from "./styles";
import PrivacyPolicy from "../Privacy";
import Contact from "../Contact";

const Container = lazy(() => import("../../common/Container"));
const AppDownload = lazy(() => import("../../common/AppDownload"));

const TYPE_MODAL = {
  privacy: "Chính sách và điều khoản",
  contact: "Liên hệ",
};

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type, setModalType] = useState(""); //privacy || contact

  const showModal = (type) => {
    setIsModalVisible(true);
    setModalType(type);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
                <Col>
                  <S.Large onClick={() => showModal(TYPE_MODAL.contact)}>
                    Liên hệ
                  </S.Large>
                  <S.Large onClick={() => showModal(TYPE_MODAL.privacy)}>
                    Điều khoản - Chính sách
                  </S.Large>
                </Col>
              </Row>
              <Col lg={8} md={8} sm={12} xs={24} align="right">
                <AppDownload />
              </Col>
            </Row>
          </Container>
        </S.Footer>
      </Fade>
      <Modal
        title={type}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        {type === TYPE_MODAL.contact ? <Contact /> : <PrivacyPolicy />}
      </Modal>
    </Fragment>
  );
};

export default withTranslation()(Footer);
