import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  
    
  return (
    <div className="navbar m1-auto">
      <Link to="/login" onClick={() => localStorage.clear()} className="m1-auto">Log out</Link>
    </div>
  );
};

export default NavBar;