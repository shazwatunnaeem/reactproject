//This file contains information on NavBar of Contacts App

import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import logout from './logout.svg'
import logo from './logo.svg'

export function NavBar() {

  return (
    <div>
      <Navbar bg="dark" style={{backgroundColor: "#084298", color: "white"}}>
        <NavbarBrand style={{color: "white"}} href="/"> <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> Cloud Contact</NavbarBrand>         
            <NavbarText style={{color: "white"}}>Hello Shazwa
              <NavbarText style={{color: "white"}} href="/"> <img
              alt=""
              src={logout}
              width="30"
              height="30"
              className="d-inline-block align-top"/> Logout 
              </NavbarText>
          </NavbarText>
      </Navbar>
    </div>
  );
}
  