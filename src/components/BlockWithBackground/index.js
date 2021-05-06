import { Row, Col, List } from "antd";
import { lazy } from "react";

import * as S from "./styles";
const Container = lazy(() => import("../../common/Container"));

const BlockWithBackground = ({
  backgroundUrl,
  imageUrl,
  title,
  subTitle,
  listContent,
  content,
  id,
}) => {
  return (
    <S.Block
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <Container>
        <Row type="flex" align="middle" id={id}>
          <Col lg={8} md={24} sm={24} xs={24}>
            <S.ContentWrapper>
              <h6>{title}</h6>
              <S.Content>{subTitle}</S.Content>
            </S.ContentWrapper>
            {listContent?.length ? (
              <List
                itemLayout="horizontal"
                dataSource={listContent}
                renderItem={(item) => (
                  <List.Item style={{ border: "none" }}>
                    <List.Item.Meta avatar={<S.CircleDot />} title={item} />
                  </List.Item>
                )}
              />
            ) : (
              <S.Content>{content}</S.Content>
            )}
          </Col>
          <img src={imageUrl} alt={imageUrl} with={346} height={560} />
        </Row>
      </Container>
    </S.Block>
  );
};

export default BlockWithBackground;
