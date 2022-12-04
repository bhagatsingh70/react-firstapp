import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import { Link, useNavigate } from 'react-router-dom';
//import { useNavigation } from '@react-navigation/native';

const logout=() => {

  //const navi = useNavigate();
  //const navigation = useNavigation();
  console.log(sessionStorage.getItem("navigation"));
  console.log('Logout');

  // CLEAR DATA FROM STORAGE
  localStorage.clear();
  sessionStorage.clear();
  console.log(sessionStorage.getItem("navigation"));
  //navi("/login");
  //navigation.navigate('MyNextPage');
}

const Navbar = () => {
  console.log('Navbar load');
  
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" >
            About1
          </NavLink>
          <NavLink to="/contact" >
            Contact Us
          </NavLink>
          <NavLink to="/blogs" >
            Blogs
          </NavLink>
     
          <NavLink to="/lists" >
            Lists
          </NavLink>
          <NavLink to="/signup" >
            signup
          </NavLink>
          {sessionStorage.getItem("navigation")!='yes' && 
              <NavLink to="/login" >
              login
              </NavLink>
          }
          <NavLink to="/subscription" >
          subscription
          </NavLink>
          <Link 
              className="dropdown-item" 
              to="#" 
              onClick={logout}
			>
             Logout
			</Link>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;