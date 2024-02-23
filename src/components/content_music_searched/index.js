/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './styled.css'

import { useSelector, useDispatch } from "react-redux";


import { url } from "../../things";

import { HiCloudDownload } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";
import {RiSpotifyFill, RiYoutubeFill} from "react-icons/ri";

import { PiYoutubeLogo, PiSpotifyLogo } from "react-icons/pi";
import { motion, spring } from "framer-motion"

import {Div_Scop, Div_inf_msc, Div_icon_download, Scop_all, Div_main,Results_from,Index,Change_results,Result_options} from './styled'

export default function Searched_music(){
    const STATE = useSelector(state=>state) 
    const dispath = useDispatch();

    const Click_dl_music = (evt,type,inf)=>{
        window.location.href = `${url}/dlMusic?title=${inf.title}&type=${type}&id=${inf.id}`
    }
    const handle_change_results = (evt,r)=>{
        dispath({type:'CHANGE_RESULT', changeto:r})
    }
    const response_yt = ()=>{
        const yt_reponse = [];
        STATE.search_something.only_music.data.yt_data.forEach(d => {
            yt_reponse.push(
                <>
                    <Div_Scop className="divScop">
                        <Div_main url={d.thumbnail}></Div_main>
                        <Div_inf_msc>
                            <span className="Title">{d.name}</span>
                            <span className="Artist">{d.author}</span>
                        </Div_inf_msc>
                        <Div_icon_download>
                            <motion.div transition={{type: "spring",stiffness: 1000,damping: 40}} whileTap={{scale:0.8}}>
                                <HiCloudDownload onClick={(evt)=>Click_dl_music(evt,'id',{
                                    id:`${d.videoId}`,
                                    title: `${d.name} - ${d.author}`
                                })}/>
                            </motion.div>   
                        </Div_icon_download>        
                    </Div_Scop>
                </>
            )
        });
        return yt_reponse
    }
    const response_sp = ()=>{
        const sp_response = [];
        (STATE.search_something.only_music.data.sp_data).forEach(t=>{
            sp_response.push(
                <>
                <Div_Scop className="divScop">
                    <Div_main url={t.image}></Div_main>
                        <Div_inf_msc>
                            <span className="Title">{t.name}</span>
                            <span className="Artist">{t.artist}</span>
                        </Div_inf_msc>
                    <Div_icon_download>
                        <motion.div transition={{type: "spring",stiffness: 1000,damping: 40}} whileTap={{scale:0.8}}>
                            <HiCloudDownload onClick={(evt)=>Click_dl_music(evt,'name',{
                                id:null,
                                title: `${t.name} by ${t.artist}`
                            })}/>
                        </motion.div>
                    </Div_icon_download>
                </Div_Scop>
                </>
            )
        })
        return sp_response;
    };
    const RESULT = STATE.search_something.change_results===0 
    ? STATE.search_something.only_music.data.sp_data.content==='empty' ? <></> : <Scop_all>{response_sp()}</Scop_all>
    : <><Scop_all>{response_yt()}</Scop_all>;</>
    return(
        <Index>
        <Change_results showit={STATE.search_something.change_results}>
            <Result_options>
                <span onClick={(e)=>handle_change_results(e,0)}><RiSpotifyFill/>Spotify</span>
                <span onClick={(e)=>handle_change_results(e,1)}><RiYoutubeFill/>YouTube</span>
            </Result_options>
        </Change_results>
        {RESULT}
        </Index>
    )
}