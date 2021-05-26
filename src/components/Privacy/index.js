import {  Col } from "antd";

import contentData from "./content";

import * as S from './styles'

const Privacy = () => {
  return (
    <>
      <Col contentContainerStyle={{ paddingBottom: 20 }}>
        {contentData.map((content, index) => (
          <>
            {index !== 0 ? (
              <S.Title style={{ marginVertical: 10, textAlign: "center" }}>
                --------------------------
              </S.Title>
            ) : null}
            <S.Title>{content.title}</S.Title>
            <S.SubTitle>{content.subTitle}</S.SubTitle>

            {content.data.map(({ title, items, subTitle = "" }) => (
              <div>
                <S.MinTitle >{title}</S.MinTitle>
                {subTitle ? <S.MinSubTitle>{subTitle}</S.MinSubTitle> : null}
                {items.map((item) => (
                  <S.Content>{item}</S.Content>
                ))}
              </div>
            ))}
          </>
        ))}
      </Col>
    </>
  );
};

export default Privacy;
