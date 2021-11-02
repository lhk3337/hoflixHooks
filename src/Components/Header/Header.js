import React from "react";

import { withRouter } from "react-router-dom";
import { Header, Img, List, Item, SLink } from "./style";
import img from "assets/logo.png";

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Img src={img} />
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">영 화</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">텔레비전</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">검 색</SLink>
      </Item>
    </List>
  </Header>
));
