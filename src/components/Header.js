import React from "react";

//Custom components
import Search from "../components/Search";
import Menu from "../components/Menu";

const Header = () => {

  return (

    <header className="header">
      <div>
          News Form
      </div>
      <Search/>
      <Menu/>      
    </header>
  );
};

export default Header;
