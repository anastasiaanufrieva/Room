import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/actions/userAction';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

export default function MyNav() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <Navbar
      color="light"
      expand="md"
      light
    >
      <Link to="/">
        <NavbarBrand>
          Home
        </NavbarBrand>
      </Link>
      <NavbarToggler />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          {!user.name && (
            <>
              <NavItem>
                <Link to="/user/logup">
                  <NavLink >
                    Logup
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/user/login">
                  <NavLink >
                    Login
                  </NavLink>
                </Link>
              </NavItem>
            </>
          )}
          <NavItem>
            {user.name && (
              <button onClick={logoutHandler} type="button">Выйти</button>
            )}
          </NavItem>
          <NavItem>
            <Link to="/rooms">
              <NavLink >
                rooms
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
