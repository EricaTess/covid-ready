import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  
    
  return (
    <div className="navbar">
      <Link to="/login" onClick={() => localStorage.clear()}>Log out</Link>
    </div>
  );
};

export default NavBar;