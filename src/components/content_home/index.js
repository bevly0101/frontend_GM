/* eslint-disable react/jsx-pascal-case */
import React from "react";

import {RiSpotifyFill, RiYoutubeFill} from "react-icons/ri";
import {FaDeezer} from "react-icons/fa6";

import {Container,Text_download, Scop_plataforms, Content_plataform, Button_getIt,Scop_buttonGetit} from './styled'
import './styled.css'

import { useDispatch , useSelector} from "react-redux";


export default function Content_home(){
    const dispath = useDispatch();
    const handle_choose_plataform = (evt,id)=>{
        const All_btn = document.querySelectorAll('.scp_btn');
        Array.from(All_btn).forEach(e=>{
            e.style.opacity = '0%';
            e.parentElement.classList.remove('cliked')
        });
        try{document.querySelectorAll('.ctPtfm')[id].classList.add('cliked')}catch{}
       (All_btn[id]).style.opacity='100%'
    }
    const handle_click_getIt = (evt,id)=>{
        console.log(id);
        ({
            "2":()=>{
                dispath(dispath({
                    type:'CLICK_ICON_HEADER',id: Number(id)
                }))
                dispath({type:'ERROR_REQUEST',msg_time_over:false,error_msg:"Paste your spotify playlist link"})
                setTimeout(()=>dispath({type:'ERROR_REQUEST',msg_time_over:true,error_msg:''}),2000)
            },
            "1":()=>{
                dispath(dispath({
                    type:'CLICK_ICON_HEADER',id: Number(id)
                }))
                dispath({type:'ERROR_REQUEST',msg_time_over:false,error_msg:"type the name sound or paste YouTube link"})
                setTimeout(()=>dispath({type:'ERROR_REQUEST',msg_time_over:true,error_msg:''}),2000)
            }
        })[id]();
    }
    return (
        <Container className="home_container page">
            <Text_download className="Text_titile_home">Your playlist with you NOW!!!</Text_download>
            <Scop_plataforms>
                <Content_plataform className="ctPtfm" onClick={(e)=>handle_choose_plataform(e,0)}>
                    <RiSpotifyFill className="spficon"/>
                    <Scop_buttonGetit className="scp_btn" onClick={(e)=>handle_click_getIt(e,2)}>
                        <Button_getIt>GET IT</Button_getIt>
                    </Scop_buttonGetit>
                </Content_plataform>
                <span>OR</span>
                <Content_plataform  className="ctPtfm" onClick={(e)=>handle_choose_plataform(e,1)}>
                    <RiYoutubeFill className="yticon"/>
                    <Scop_buttonGetit className="scp_btn" onClick={(e)=>handle_click_getIt(e,1)}>
                        <Button_getIt>GET IT</Button_getIt>
                    </Scop_buttonGetit>
                </Content_plataform>
            </Scop_plataforms>
            <img className="decoration_page_img" src="./images/hand_phone.svg"/>

        </Container>
    )
}