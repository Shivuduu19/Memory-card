import React from "react";
import logo from "../assets/logo.png";
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
  background-color: #40aa79;
`;
const Logo = styled.img`
  max-width: 710px;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export default Header;
