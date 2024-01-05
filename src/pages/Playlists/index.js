/* eslint-disable react/jsx-pascal-case */
import React from "react";

//components
import Header_home from "../../components/header_home";
import Get_playlist_page from "../../components/content_get_playlist_page"; 
import My_Playlists from "../../components/my_playlists";

import {useSelector} from 'react-redux'

export default function Playists(){
    const STATE = useSelector(state=>state)
    const CONTENT = STATE.search_something.playlist.researched ? <Get_playlist_page/> : <My_Playlists/>
    return(
        <>
            <Header_home type="Pl" input="insert your link playlist"/>
            <>{CONTENT}</>
        </>
    )
}