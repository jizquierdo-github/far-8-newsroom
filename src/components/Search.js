import React from 'react';

//Custom components
import CustomIcon, {SEARCH} from  "./CustomIcon";

class Search extends React.Component {

    render() {
        
        return (
            <div>
                <label>
                    <input type="text" name="Buscar" placeholder="Buscar"/>
                    <button>
                        <CustomIcon type={SEARCH} size="1em"/>
                    </button> 
                </label>
            </div>
        )
    }
}

export default Search;