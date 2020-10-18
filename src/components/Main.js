
import React from 'react';
import { Route, Switch } from "react-router-dom";

//Custom components
import Latest   from "../containers/Latest";
import Trending from "../containers/Trending";
import Category from "../containers/Category";
import Search   from "../containers/Search";

class Main extends React.Component {

    render() {
        
        return (
            <main className="main">
                <Switch>
                    <Route exact path="/"                          component={Latest} />
                    <Route exact path="/ultimas/:paramDate"        component={Latest} />
                    <Route path="/tendencias/:paramDate/:paramQty" component={Trending} />
                    <Route path="/noticias/:categoryName"          component={Category} />
                    <Route path="/search/:text"                    component={Search} />
                </Switch>
            </main>
        )
    }
}

export default Main;