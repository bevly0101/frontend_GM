/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import axios from "axios";

import { url } from "../../things";

import {Scop_content_header,Home_header,Div_options, Input_header, Scop_userIcon_header,Scop_input_header} from './styled'

import {AiOutlineSearch} from "react-icons/ai";
import {BiSolidUser} from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi";

import { useDispatch } from "react-redux";

//animation framework
import { motion, spring } from "framer-motion"


export default function Header_home(props){

    const dispath = useDispatch();

    const handle_Search = async(evt)=>{
        if(evt.keyCode===13&& props.type==='Msc'){
            const response = await axios.get(`${url}/search/?t=${evt.target.value}`,{
            }).then(e=>JSON.stringify(e.data))
            const data_music = JSON.parse(response)
            //console.log(data_music)
            dispath({type:'SEARCH_MUSIC', data:data_music})
            dispath({type:'CLICK_ICON_HEADER',id:1})
        }
        if(evt.keyCode===13&& props.type==="Pl"){
            const link_playlist = (evt.target.value).split('/playlist/')[1].split('?')[0]
            const response = await axios.get(`${url}/search_Pl?id=${link_playlist}`,{
            }).then(e=>JSON.stringify(e.data))
            console.log(response)
            dispath({type:'SEARCH_PLAYLIST', data: JSON.parse(response)})

            
        }
    }
    const handle_click_options = (evt)=>{
        const Header = document.querySelector('.Header_app')
        Header.classList.add('show_options')
        dispath({type:'CLICK_HAMBURGUER'})
        dispath({type:'CLOSE/OPEN_HEADER'})

        setTimeout(()=>{
            Header.style.display = 'flex'
        },200)
    }
    return(
        <Home_header>
                <Div_options onClick={(e)=>handle_click_options(e)} className="hamburguer">
                    <motion.div transition={{type: "spring",stiffness: 1000,damping: 40}} whileTap={{scale:0.8}} className="motion_hamb">
                        <GiHamburgerMenu/>
                    </motion.div>
                </Div_options>
            <Scop_content_header>
                <Scop_input_header className="input_header">
                    <Input_header onKeyDown={(e)=>handle_Search(e)} placeholder={props.input}/>
                    <AiOutlineSearch/>
                </Scop_input_header>
                <Scop_userIcon_header>
                    <BiSolidUser/>
                </Scop_userIcon_header>
            </Scop_content_header>
            </Home_header>
    )
}