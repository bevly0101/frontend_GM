import React from "react";

import { Index } from "./styled";


import { motion } from "framer-motion"

import { useSelector } from "react-redux";

export default function Error_msg(msg){
    const STATE = useSelector(state=>state)
    return(
        <Index>
            <motion.div
                style={{
                    scale: 0.1,
                    bottom:0
                }}
                animate={{ scale: 1,}}
                transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
            }}>
                <span>{STATE.search_something.error_request.error_msg}</span>
            </motion.div>
        </Index>
    )
}