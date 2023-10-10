import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
      <Link to={"/"} className="links">
        Home
      </Link>
      <Link to={"/About"} className="links">
        About
      </Link>
    </div>
  );
};

export default Header;
