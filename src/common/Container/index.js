import * as S from "./styles";

const Container = ({ padding, border, children, color }) => (
  <S.Container color={color} padding={padding} border={border}>
    {children}
  </S.Container>
);

export default Container;
