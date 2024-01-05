/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React from "react";

import {Site_scop} from './styled';

import { useDispatch , useSelector} from "react-redux";

import { motion, spring } from "framer-motion";

import Header from '../Header';
import Main from '../Main'

export default function SiteScop(){
    const STATE = useSelector(state=> state)
    const dispath = useDispatch();
    if(window.screen.availWidth<700){

    }
    return (
        <Site_scop className="siteScop">
            {window.screen.availWidth>700 ? <Header/>:
            <motion.div className="motion_header" transition={{type: "spring",stiffness: 200,damping: 30}} animate={STATE.header_inf.header_is_visible ? {x:80}:{x:-500}}>
                <Header/>
            </motion.div>
            }
            <Main/>
        </Site_scop>
    )
}