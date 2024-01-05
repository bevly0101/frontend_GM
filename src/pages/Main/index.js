/* eslint-disable react/jsx-pascal-case */
import React from "react";

import {Div_main} from './styled'
import './styled.css'

//components
import Home from "../Home";
import Search from "../Search";
import Playists from "../Playlists";

import { useSelector } from "react-redux";

export default function Main(){
    const STATE = useSelector(state=>state)
    //console.log(STATE)
    const Pages_main = [<Home/>,<Search/>,<Playists/>]

    
    return (
        <>
            <Div_main className="Main">
                {Pages_main[STATE.idPageNow]}
            </Div_main>
        </>
    )
}