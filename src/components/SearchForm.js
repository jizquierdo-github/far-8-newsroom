import React from "react";
import { Link } from "react-router-dom";

//Custom components
import CustomIcon, {SEARCH} from  "./CustomIcon";

class SearchForm extends React.Component {

  handleOnChange=(e)=> {
    e.preventDefault();
    const {value} = e.target;

    this.props.setTextToSearch(value)
  }

  render() {
  
    return (
        <div>
            <label>
                <input type="text" name="Buscar" onChange={this.handleOnChange} value={this.props.textToSearch} placeholder="Buscar"/>
                <Link key="search" to={`/search/${this.props.textToSearch}`}>
                    <button>
                        <CustomIcon type={SEARCH} size="1em"/>
                    </button> 
                </Link>
            </label>          
        </div>
    );
  }
};

export default SearchForm;
