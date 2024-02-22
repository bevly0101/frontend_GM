/* eslint-disable react/jsx-pascal-case */
import React from "react";

import {Div_main} from './styled'
import './styled.css'

//components
import Home from "../Home";
import Search from "../Search";
import Playists from "../Playlists";
import Error_msg from "../../components/error_component";

import { useSelector } from "react-redux";

export default function Main(){
    const STATE = useSelector(state=>state)
    const Pages_main = [<Home/>,<Search/>,<Playists/>]
    const ERROR_MSG = STATE.search_something.error_request.any_error ? <Error_msg msg={STATE.search_something.error_request.error_msg}/> : <></>;

    
    return (
        <>
            <Div_main className="Main">
                {Pages_main[STATE.idPageNow]}
                {ERROR_MSG}
            </Div_main>
        </>
    )
}