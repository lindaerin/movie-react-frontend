import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEy-Hi3lntqni03_IgMHV_6nbWR5sG5EuE11oKCej1YqlHvxzo6lfyF7L_JXrJaoZIkY&usqp=CAU"
          alt="Avatar"
          className="nav-avatar"
        />
      </a>
    </div>
  );
}

export default Nav;
