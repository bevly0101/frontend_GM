import React from "react";

import {Div_home} from './styled'

import Header_home from "../../components/header_home";
import Content_home from "../../components/content_home";



export default function Home(){

    return(
        <Div_home>
            <Header_home type="Msc" input="search music"/>
            <Content_home/>
        </Div_home>
    )
}