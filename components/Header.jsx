import React from "react";
import logo from "../src/assets/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeadWrapper>
      <Logo src={logo} alt="logo"></Logo>
    </HeadWrapper>
  );
};
const HeadWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const Logo = styled.img`
  max-width: 710px;
`;

export default Header;
