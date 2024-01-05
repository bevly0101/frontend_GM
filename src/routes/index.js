
import React from "react";
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/home'
import Login from '../pages/login'
import Notfound from "../pages/not_found";

import MyRoute from "./myRoute";

export default function Routes(){
    return(
       <Switch>
            <Route exact path="/login" ><Login/></Route>
            <MyRoute isClosed={true}  exact path="/home"><Home/></MyRoute>
            <MyRoute path="*"><Notfound/></MyRoute>
       </Switch>
    )
}