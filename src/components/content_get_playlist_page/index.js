import React from "react";

import { useSelector } from "react-redux";

import { url } from "../../things";

import '../content_music_searched/styled.css'

import { HiCloudDownload } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";

import {Div_Scop, Div_inf_msc, Div_icon_download, Scop_all, Div_main} from '../content_music_searched/styled'

export default function Get_playlist_page(){
    const STATE = useSelector(state=>state);
    const Click_dl_music = (tr)=>{
        window.location.href = `${url}/dlMusic?title=${tr}`
    }
    const tracks_playlist = ()=>{
        const tracks = [];
        (STATE.search_something.playlist.data.tracks).forEach(tr => {
            tracks.push(
                <>
                <Div_Scop className="divScop">
                    <Div_main>
                        <img className="img_music" src={tr.img}/>
                        <Div_inf_msc>
                            <span className="Title">{tr.name}</span>
                            <span className="Artist">{tr.artist}</span>
                        </Div_inf_msc>
                    </Div_main>
                    <Div_icon_download>
                        <HiCloudDownload onClick={()=>Click_dl_music(`${tr.artist} - ${tr.name} official music lyric video`)}/>
                        <IoIosMore/>
                    </Div_icon_download>
                </Div_Scop>
                </>
            )
        });
        return tracks
    }
    return(
        <>
        <div>
            <img src={STATE.search_something.playlist.data.pl_img}/>
            <h1>{STATE.search_something.playlist.data.playlist_name}</h1>
            <h3>{STATE.search_something.playlist.data.playlist_length}</h3>
        </div>
        <Scop_all> 
            {tracks_playlist()}
        </Scop_all>

        </>
    )
}