import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import Favorites from "../../components/Favorites/Favorites"
import PhotoOfTheDay from "../../components/PhotoOfTheDay/PhotoOfTheDay"


export const routes = {
    root: "/",
    favorites:"/favorites"
}

function Router(props) {
    return (
        
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={PhotoOfTheDay} />
                <Route exact path={routes.favorites} component={Favorites} />
                
                <Route path="*" component={() => "Página não encontrada"} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router

