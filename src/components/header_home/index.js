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

    const handle_error = (msg)=>{
        dispath({type:'ERROR_REQUEST',msg_time_over:false,error_msg:msg})
        setTimeout(()=>dispath({type:'ERROR_REQUEST',msg_time_over:true,error_msg:''}),2000)
    }

    const handle_Search = async(evt)=>{
        
        if(evt.keyCode===13&& props.type==='Msc'){
            var response1 = '{"content":"empty"}';
            var type_ty_search = 'id'

            dispath({type:'CLICK_ICON_HEADER',id:1})
            dispath({type:'START_NEW_SEARCH',finished:false})
            
            
            if(!(evt.target.value).includes('https://www.youtube.com/watch?v=') && !(evt.target.value).includes('https://youtu.be/')){
                response1 = await axios.get(`${url}/search/?t=${evt.target.value}`,{
                }).then(e=>JSON.stringify(e.data))
                if(JSON.parse(response1).erro) {handle_error(JSON.parse(response1).erro);dispath({type:'START_NEW_SEARCH',finished:true});return}
                type_ty_search = 'name'
            }
            dispath({type:'CHANGE_RESULT', changeto:type_ty_search==='name'?0:1})
            const response2 = await axios.get(`${url}/searchYT?title=${type_ty_search==='id'? ((evt.target.value).includes('watch?v=') ? evt.target.value.split('watch?v=')[1] : evt.target.value.split('https://youtu.be/')[1].split('?si')[0]): evt.target.value}&type=${type_ty_search}`,{
            }).then(e=>JSON.stringify(e.data))
            if(JSON.parse(response2).erro) {handle_error(JSON.parse(response2).erro);dispath({type:'START_NEW_SEARCH',finished:true});return}
            const data_music = {sp_data:JSON.parse(response1),yt_data:JSON.parse(response2)}
            dispath({type:'SEARCH_MUSIC', data:data_music})
            dispath({type:'START_NEW_SEARCH',finished:true})
        }
        if(evt.keyCode===13&& props.type==="Pl"){
            const response = await axios.get(`${url}/search_Pl?id=${evt.target.value}`,{
            }).then(e=>JSON.stringify(e.data))
            if(JSON.parse(response).erro) {handle_error(JSON.parse(response).erro);return}
            dispath({type:'SEARCH_PLAYLIST', data: JSON.parse(response)})
        }
    }
    const handle_click_options = (evt)=>{
        const Header = document.querySelector('.Header_app')
        Header.classList.add('show_options')
        dispath({type:'CLICK_HAMBURGUER'})
        dispath({type:'CLOSE/OPEN_HEADER'})

        setTimeout(()=>{ Header.style.display = 'flex' },200)
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