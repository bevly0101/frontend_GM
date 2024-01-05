/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {Container} from './styled'

import Searched_music from './../content_music_searched'

import { useSelector } from "react-redux";

export function Content_Search(){
    const STATE = useSelector(state=>state)
    const CONTENT = STATE.search_something.only_music.researched ? <Searched_music/> : (<Container className="page"><h1>Pesquise sua música e BAIXE AGORA!!!</h1><img className="decoration_page_img" src="./images/search_theme.svg"/></Container>)
    return (
        <>{CONTENT}</>
    )
}