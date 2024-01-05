import React from "react";
import {Route, Redirect} from 'react-router-dom'

export default function MyRoute({ component: Component, isClosed, ...rest}){
    const isLogged = true;
    if(isClosed && !isLogged){
        return(
            <Redirect to={{
                pathname:'/login',
                state: {prevPath:rest.location.pathname}
            }}/>
        )

    }
    return <Route {...rest} component={Component}/> 

}