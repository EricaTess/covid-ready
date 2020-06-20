import React from "react";


const NavBar = () => {

  return (
    <div>
      {!localStorage.getItem('isLoggedIn')}
        <button>Log out</button>
    </div>
  );
};

export default NavBar;