import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const Menu = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <Nav className="justify-content-center navbar navbar-dark bg-dark" activeKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>

</Nav>

  );
}

export default Menu;
