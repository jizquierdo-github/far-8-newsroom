import React from "react";

//Custom components
import SearchForm from "../containers/SearchForm";
import Menu from "../components/Menu";

class Header extends React.Component {

  state = {
    searchText : ""
  }

  handleOnChange=(e)=> {
    const {value} = e.target;

    this.setState({searchText: value})
  }

  render() {
    
    return (
  
      <header className="header">
        <div>
            News Form
        </div>
        <SearchForm/>
        <Menu/>      
      </header>
    );
  }
};

export default Header;
