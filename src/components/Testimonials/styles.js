import styled from "styled-components";

export const Block = styled.div`
  position: relative;
  padding: 0rem 0 3rem;
  text-align: center;
  justify-content: center;
  background: "red";
  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const BlockContent = styled.div`
  position: relative;
  padding: 1rem 10rem;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 2.5rem 0 3rem;
  }
`;

export const BlockStar = styled.div`
  padding: 0 0 1.5rem;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
  // max-width: 100%;
  flex-wrap: wrap;
`;

export const Title = styled.h6`
  font-size: 22px;
  color: black;
`;
export const SubTitle = styled.span`
  font-size: 14px;
  color: #b3b7c0;
`;

export const Content = styled.span`
  font-size: 14px;
  color: #b3b7c0;
`;

export const MinTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled.p`
  font-size: 0.75rem;
`;

export const ButtonArrow = styled.button`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #eaebef;
  background : #fff;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
