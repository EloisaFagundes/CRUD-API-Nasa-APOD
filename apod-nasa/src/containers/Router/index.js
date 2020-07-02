import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import Favorites from "../../components/Favorites/Favorites"


export const routes = {
    root: "/",
    favorites:"/favorites"
}

function Router(props) {
    return (
        
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.favorites} component={Favorites} />
                
                <Route path="*" component={() => "Página não encontrada"} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router

