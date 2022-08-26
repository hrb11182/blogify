import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.JPG";

const Navbar = ({ user, handleLogout }) => {
  const userId = user?.uid;
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <Link to="/">
              <li style={{ marginLeft: "0.3125em", marginTop:"0.9375em", }}>Home</li>
            </Link>
            <Link to="/create">
              <li style={{ marginLeft: "0.9em", marginTop:"0.9375em", }}>Create</li>
            </Link>
            <Link to="/about">
              <li style={{ marginLeft: "1.9125em", marginTop:"0.9375em", marginRight:"1.5625em" }}>About</li>
            </Link>
            {userId ? (
              <>
                <div className="profile-logo">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="logo"
                    style={{
                      width: "1.875em",
                      height: "1.875em",
                      borderRadius: "50%",
                      marginTop:"0.75em",
                      marginLeft:"0.8em"
                    }}
                  />
                </div>
                <p className="name" style={{ color: 'hsl(205, 72%, 37%)', marginLeft: "0.8125em", marginTop:"0.9375em", }}>
                  {user?.displayName}
                </p>
                <li className="logout" style={{ color: 'hsl(205, 72%, 37%)', marginLeft: "1.5625em", cursor:"pointer", marginTop:"0.9375em", }} onClick={handleLogout}>Logout</li>
              </>
            ) : (
              <Link to="/auth">
                <li style={{ marginLeft: "0.3125em", marginTop:"0.9375em", }}>Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
