import React from "react";
import Navbar from "./nav/Navbar";

const Header = ({ active, setActive, user, handleLogout }) => {
  return (
    <>
      <Navbar
        user={user}
        handleLogout={handleLogout}/>
    </>
  );
};

export default Header;
