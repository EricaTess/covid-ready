import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  
    
  return (
    <div className="navbar m1-auto">
      {/* <img className="logo" src="./img/facemask-icon.png">COVID Ready</img> */}
      <h1 className="app-name">COVID Ready</h1>
      <Link to="/login" onClick={() => localStorage.clear()} className="m1-auto">Log out</Link>
    </div>
  );
};

export default NavBar;