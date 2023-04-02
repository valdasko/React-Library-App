import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.footer`
  background-color: #333;
  color: #fff;
`;
const FooterText = styled.h3`
  margin: 0;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;

function Footer() {
  return (
    <MyFooter>
      <FooterText>Created by Valdas 2023</FooterText>
    </MyFooter>
  );
}

export default Footer;
