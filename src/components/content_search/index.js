/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {Container,Index} from './styled'

import Searched_music from './../content_music_searched'
import Loaging_Animation from "../loading_animation";


import { useSelector } from "react-redux";

export function Content_Search(){
    const STATE = useSelector(state=>state)
    const CONTENT = STATE.search_something.only_music.researched ? <Searched_music/> : (<Container className="page"><h1>Search your music and download NOW!!!</h1><img className="decoration_page_img" src="./images/two_dudes.svg"/></Container>)
    const LOADING = STATE.search_something.search_on ? <Loaging_Animation/> : CONTENT

    return (
        <Index>
            {LOADING}
        </Index>
    )
}