/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from "react";


//Style
import {Container} from './styled'

//Components
import Header_home from "../../components/header_home"; 
import { Content_Search } from "../../components/content_search";


export default function Search(){
    return (
        <>
            <Header_home type="Msc" input="search music"/>
            <Content_Search/>
        </>
    )
}