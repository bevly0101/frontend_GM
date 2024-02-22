/* eslint-disable react/jsx-pascal-case */
import React from "react";

//components
import Header_home from "../../components/header_home";
import Get_playlist_page from "../../components/content_get_playlist_page"; 
import My_Playlists from "../../components/my_playlists";

import Loaging_Animation from "../../components/loading_animation";


import {useSelector} from 'react-redux'

export default function Playists(){
    const STATE = useSelector(state=>state)
    const CONTENT = STATE.search_something.playlist.researched ? <Get_playlist_page/> : <My_Playlists/>
    const LOADING = STATE.search_something.search_on ? <Loaging_Animation/> : CONTENT

    return(
        <>
            <Header_home type="Pl" input="insert your link playlist"/>
            <>{LOADING}</>
        </>
    )
}