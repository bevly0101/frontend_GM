/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useSelector } from "react-redux";

import { url } from "../../things";
import '../content_music_searched/styled.css'

import { HiCloudDownload } from "reac t -icons/hi";

import { motion } from "framer-motion"

// import styled components 
import {Div_Scop, Div_inf_msc, Div_icon_download, Scop_all, Div_main,Index_inf_pl,Img_pl} from './styled'

export default function Get_playlist_page(){
    const STATE = useSelector(state=>state);
    const Click_dl_music = (tr,type)=> {window.location.href = `${url}/dlMusic?title=${tr}&type=${type}`};
    const tracks_playlist = ()=>{
        const tracks = [];
        (STATE.search_something.playlist.data.tracks).forEach(tr => {
            tracks.push(
                <>
                    <Div_Scop className="divScop">
                        <Div_main url={tr.img}></Div_main>
                        <Div_inf_msc>
                            <span className="Title">{tr.name}</span>
                            <span className="Artist">{tr.artist}</span>
                        </Div_inf_msc>
                        <Div_icon_download>
                            <motion.div transition={{type: "spring",stiffness: 1000,damping: 40}} whileTap={{scale:0.8}}>
                                <HiCloudDownload onClick={()=>Click_dl_music(`${tr.name} by ${tr.artist}`,'name')}/>
                            </motion.div>
                        </Div_icon_download>
                    </Div_Scop>
                </>
            )
        });
        return tracks
    }
    return(
        <>
            <Index_inf_pl>
                <Img_pl src={STATE.search_something.playlist.data.pl_img}/>
                <div>
                    <h1>{STATE.search_something.playlist.data.playlist_name}</h1>
                    <h3>{STATE.search_something.playlist.data.playlist_length} músicas</h3>
                </div>
            </Index_inf_pl>
            <Scop_all>
                {tracks_playlist()}
            </Scop_all>
        </>
    )
}