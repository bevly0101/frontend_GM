/* eslint-disable react/jsx-pascal-case */
import React from "react";

import './index.css'

import {Provider} from 'react-redux'
import store from './store'

import {Router} from 'react-router-dom'
//import Routes from "./routes";
import history from "./services/history";
import SiteComponent_scop from "./pages/SiteScop";


export default function App(){
    return(
    <Provider store={store}>
        <Router history={history}>
            <SiteComponent_scop/>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7251421938417844"crossorigin="anonymous"></script>
        </Router>
    </Provider>
    )
}
