import React from "react";
import Proptypes from "prop-types";
import { Container, H1, Text } from "./style";
const Message = ({ text }) => (
  <Container>
    <H1>404</H1>
    <Text>{text}</Text>
  </Container>
);
Message.propTypes = {
  text: Proptypes.string.isRequired,
};
export default Message;
