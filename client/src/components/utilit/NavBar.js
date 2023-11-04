import React, { useContext, useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../../store/store";
import Button from "react-bootstrap/Button";
import { getError } from "../../handelErorr/Utis";
import axios from "axios";
import SearchBox from "../SearchBox";
import { toast } from "react-toastify";

const NavBar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/products/categories`
        );
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <div
    // className={
    //   sidebarIsOpen
    //     ? "d-flex flex-column site-container active-cont"
    //     : "d-flex flex-column site-container"
    // }
    >
      <header className="Categoriesss">
        {/* <Link to="/">amazona</Link> */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Button
              variant="dark"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <i className="fas fa-bars"></i>
            </Button>
            <LinkContainer to="/">
              <Navbar.Brand className="brand">Acos</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-nav bar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />
              <Nav className="me-auto  w-100 justify-content-end">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown
                    title={`Admin: ${userInfo.name}`}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/Dashbord">
                      <NavDropdown.Item>Dashbord</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/productList">
                      <NavDropdown.Item>Product</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/addproduct">
                      <NavDropdown.Item>Add Product</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/orderList">
                      <NavDropdown.Item>Order</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/userlest">
                      <NavDropdown.Item>User</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div
        className={
          sidebarIsOpen
            ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
            : "side-navbar d-flex justify-content-between flex-wrap flex-column"
        }
      >
        <Nav className="flex-column text-white w-100 p-2 Categoriesss">
          <Nav.Item>
            <strong>Categories</strong>
          </Nav.Item>

          {categories.map((category) => (
            <Nav.Item key={category}>
              <LinkContainer
                to={{
                  pathname: "/search",
                  search: `?category=${category}`,
                }}
                onClick={() => setSidebarIsOpen(false)}
              >
                <Nav.Link className="category">{category}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default NavBar;
