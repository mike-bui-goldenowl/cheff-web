import styled from "styled-components";

export const Block = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 36px;
  font-family: "SFProDisplayBold";
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  color: white;
  font-size: 36px;
  font-family: "SFProDisplayBold";
`;

export const SubContent = styled.p`
  margin: 1.5rem 0 2rem 0;
  color: white;
  padding: 0 1rem 0;
  border-left: 2px solid red;
  font-size: 14px;
  font-family: "SFProDisplayRegular";
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;
  color: white;
  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

export const CircleDot = styled.span`
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
`;

export const Spacing = styled.div`
  width: 10px;
`;
