import React from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 0.5em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a target="_blank" href="https://jae-young.com" rel="noreferrer">
        Created by Jae Young © 2021
      </a>
    </FooterContainer>
  );
};

export default Footer;
