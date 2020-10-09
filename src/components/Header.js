import React from "react";

//Custom components
import Search from "../components/Search";
import Menu from "../components/Menu";

class Header extends React.Component {

  render() {
    
    return (
  
      <header className="header">
        <div>
            News Form
        </div>
        <Search/>
        <Menu/>      
      </header>
    );
  }
};

export default Header;
