import styled from "styled-components";

export const Block = styled.section`
  position: relative;
  padding: 7rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`;

export const BlockInner = styled.div`
  position: relative;
  padding: 2rem 2rem;
`;

export const Title = styled.h6`
  color: #ffffff;
  padding: 0;
  margin: 0;
`;

export const Content = styled.p`
  margin: 0.5rem 0 2rem 0;
  color: #ffffff;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;
  color: white;
  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 700px;
`;

export const TextWrapper = styled.div`
  border-radius: 3rem;
  max-width: 400px;
`;
