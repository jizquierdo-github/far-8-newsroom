
import React from 'react';
import { Route } from "react-router-dom";

//Custom components
import Latest   from "../containers/Latest";
import Trending from "../containers/Trending";
import Category from "../containers/Category";

const Main = () => {

    return (
        <main className="main">
            <Route exact path="/"                 component={Latest} />
            <Route exact path="/:date"            component={Latest} />
            <Route path="/tendencias/:date"       component={Trending} />
            <Route path="/noticias/:categoryName" component={Category} />
        </main>
    )
}

export default Main;