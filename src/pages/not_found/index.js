

import React from "react";
import './index.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    setTimeout(()=>{document.location.reload()},10)
    return(
        <>
            <h1>Opsss!!!</h1>
            <h2>Pagina nao encontrada :(</h2>
        </>
    )
}