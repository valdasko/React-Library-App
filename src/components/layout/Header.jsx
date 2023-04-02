import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyHeader = styled.header`
  background-color: #333;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const SiteLink = styled(NavLink)`
  display: inline-block;
  padding: 0.8em 1.5em;
  font-size: 2rem;
  background-color: #333;
  transition: color 0.3s ease-out, background-color 0.3s ease-out;
  &:hover {
    background-color: #d3b6b6;
    color: #333;
  }
  &.active {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

function Header() {
  return (
    <MyHeader>
      <Nav className="container">
        <SiteLink to="/">
          {' '}
          <i className="fa fa-book" aria-hidden="true"></i> Library
        </SiteLink>
        <SiteLink to="/addnewbook">Add book</SiteLink>
      </Nav>
    </MyHeader>
  );
}

export default Header;
