import React from "react";
import './styled.css'

import { useSelector } from "react-redux";

import { url } from "../../things";

import { HiCloudDownload } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";

import {Div_Scop, Div_inf_msc, Div_icon_download, Scop_all, Div_main} from './styled'

export default function Searched_music(){
    const STATE = useSelector(state=>state)

    const Click_dl_music = ()=>{
        
        window.location.href = `${url}/dlMusic?title=${STATE.search_something.only_music.data.artist} - ${STATE.search_something.only_music.data.name}`
    }

    return(
        <Scop_all>
            <Div_Scop className="divScop">
                <Div_main>
                    <img className="img_music" src={STATE.search_something.only_music.data.image}/>
                    <Div_inf_msc>
                        <span className="Title">{STATE.search_something.only_music.data.name}</span>
                        <span className="Artist">{STATE.search_something.only_music.data.artist}</span>
                    </Div_inf_msc>
                </Div_main>
                <Div_icon_download>
                    <HiCloudDownload onClick={()=>Click_dl_music()}/>
                    <IoIosMore/>
                </Div_icon_download>
            </Div_Scop>
        </Scop_all>
    )
}