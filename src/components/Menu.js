import React from "react";
import { Link } from "react-router-dom";

//Custom components
import { categories } from "../config/data";

const Menu = () => {

    const categoryList = categories.map((category) => {
        const id = category.includeId ? `/${category.name}` : '';
    
        return (
        
            <Link key={category.id} to={`${category.linkTo}${id}`}>
                    <li>
                        {category.description}
                    </li>
            </Link>
        );
    });
    
    return (

        <navbar>
            <ul className="menu">
                {categoryList}
            </ul>
        </navbar>
    
    );

};

export default Menu;