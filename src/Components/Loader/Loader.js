import React from "react";
import { Container, Content, Span, DotContainer, Char, Dot } from "./style";
const Loader = () => (
  <Container>
    <Content>
      <Span />
      <Span />
      <Span />
      <Span />
    </Content>
    <DotContainer>
      <div>
        <Dot>
          <Char>로</Char>
        </Dot>
        <Dot>
          <Char>딩</Char>
        </Dot>
        <Dot>
          <Char>중</Char>
        </Dot>
      </div>
    </DotContainer>
  </Container>
);

export default Loader;
