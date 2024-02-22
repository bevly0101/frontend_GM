/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { Header_scop ,Logo_img, Div_Header, Div_img, Div_content, Contents_header_div} from "./styled";

import { AiFillHome , AiOutlineSearch} from "react-icons/ai";
import { BiSolidPlaylist, BiCloudDownload } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { motion, spring } from "framer-motion"

import {Colors_Header} from '../../globalStyle'
import './styled.css'


export default function Header(){
    const dispath = useDispatch();
    const STATE = useSelector(state=>state)
    
    const color_before_click_options_page = (options,id)=>{
        Array.from(options).forEach(e=>{
            e.style.backgroundColor = 'transparent'
            e.querySelector('svg').style.fill = 'white'
        })
        options[id].style.backgroundColor = Colors_Header.bg_icons
        options[id].querySelector('svg').style.fill = Colors_Header.fill_icons
    }
    const hide_options = (evt)=>{
        if(window.screen.availWidth>700) return
        const Header = document.querySelector('.Header_app')
        setTimeout(()=>{
            setTimeout(()=>{Header.style.display='none'},100)
            dispath({type:'CLOSE/OPEN_HEADER'})
        },300)
    }
    const handle_click_page = (evt,id)=>{
        //if(id === 3) return
        const Icons = document.querySelectorAll('.contents_icons .icon')
        color_before_click_options_page(Icons,id)
        dispath({
            type:'CLICK_ICON_HEADER',
            id: id
        });
        dispath({type:'CLICK_HAMBURGUER'})
    }
    window.onload = ()=>{
        console.log('ai')
        color_before_click_options_page(document.querySelectorAll('.contents_icons .icon'),STATE.idPageNow)
    }
    try{color_before_click_options_page(document.querySelectorAll('.contents_icons .icon'),STATE.idPageNow)}catch{}


    return(
            <Div_Header onClick={(e)=>hide_options(e)} className="Header_app">
                <Div_img>
                    <Logo_img src="./../../../images/getmusic-removebg-preview.png"/>
                </Div_img>
                <Div_content className="contents_icons">
                        <motion.div className="motion_header_options" whileTap={{scale:0.5, opacity:0}}>
                            <Contents_header_div className="icon" onClick={(e)=>handle_click_page(e,0)}>
                                <AiFillHome/>
                            </Contents_header_div>
                        </motion.div>
                        <motion.div className="motion_header_options" whileTap={{scale:0.5, opacity:0}}>
                            <Contents_header_div className="icon"  onClick={(e)=>handle_click_page(e,1)}>
                                <AiOutlineSearch/>
                            </Contents_header_div>
                        </motion.div>
                        <motion.div className="motion_header_options"  whileTap={{scale:0.5, opacity:0}}>
                            <Contents_header_div className="icon"  onClick={(e)=>handle_click_page(e,2)}>
                                <BiSolidPlaylist/>
                            </Contents_header_div>
                        </motion.div>
                </Div_content>
            </Div_Header>
    )
}