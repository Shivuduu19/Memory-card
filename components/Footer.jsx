import React from "react";
import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2023 Shiva Kumar </p>
      <GithubLink>
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background-color: lightpink;
  color: blue;
`;
const GithubLink = styled.a`
  display: flex;
  color: whitesmoke;
  font-size: 1.6rem;
`;
export default Footer;
