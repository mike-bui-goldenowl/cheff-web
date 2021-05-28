import styled from "styled-components";

export const Block = styled.div`
  position: relative;
  padding: 0rem 0 3rem;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const BlockContent = styled.div`
  position: relative;
  padding: 5% 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 2.5rem 0 3rem;
  }
`;

export const ContentInner = styled.div`
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const BlockStar = styled.div`
  padding: 8px 0 1.5rem;
`;

export const Title = styled.h6`
  font-size: 24px;
  color: black;
`;
export const SubTitle = styled.span`
  font-size: 16px;
  color: #b3b7c0;
`;

export const Content = styled.span`
  font-size: 18px;
  color: #b3b7c0;
`;

export const MinTitle = styled.h6`
  font-size: 18px;
  line-height: 1rem;
  font-weight: bold;
  text-align:start;
  margin-bottom:0;
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
  background: #fff;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
