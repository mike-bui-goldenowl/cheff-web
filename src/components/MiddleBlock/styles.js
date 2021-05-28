import styled from "styled-components";

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  // max-width: 800px;
  // min-width: 800px
  // @media only screen and (max-width: 768px) {
  //   max-width: 100%;
  // }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
  // max-width: 100%;
  flex-wrap: wrap;
`;

export const Circle = styled.div`
  display: inline-block;
  border-radius: 50%;
  padding: 5px 10px;
  margin: 10px;
  border: 2px solid #fd4b4a;
`;

export const Title = styled.h6`
  font-size: 24px;
  color: black;
`;
export const SubTitle = styled.span`
  font-size: 18px;
  color: #b3b7c0;
`;


export const MinTitle = styled.h6`
  font-size: 18px;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled.p`
  font-size: 16px;
`;

export const ServiceItem = styled.div`
  margin: 2rem 0.5rem;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px
`;


