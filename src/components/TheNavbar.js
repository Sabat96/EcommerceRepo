import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";


export default function TheNavbar() {
  const CartDetail = useSelector((state) => state.Product.value);
  const dispatch = useDispatch();

  const totalItems = CartDetail.reduce((prev, cur) => {
      return prev + cur.count;
  }, 0);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* as={Link} means use react-router's Link component under the hood */}
        <Navbar.Brand as={Link} to="/">
          Ella Handbag
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/productdetail">
              detail
            </Nav.Link> */}
          
          </Nav>

          <Nav>
             <Nav.Link as={Link} to="/mycart">
              <BsFillCartCheckFill /> {}
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link> */}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
