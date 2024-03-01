import styled from "styled-components";
import * as Colors from '../../globalStyle'



//
export const Index_inf_pl = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: 'Public Sans';
    width: 90%;
    padding: 1.5em;
    backdrop-filter: blur(10px);
    div{
        display: flex;
        flex-direction:column ;
        justify-content:start;
    }
    h1,h3{
        width: 100%;
        font-size: clamp(1rem, 2.5vw, 4rem); 
    }


`
export const Img_pl = styled.img`
    width: 100%;
    max-width:clamp(8em,200px,15em); 
    margin: 0.6em;
    border-radius: 1em;
    box-shadow: 13px 17px 58px 6px rgba(0,0,0,0.37);
-webkit-box-shadow: 13px 17px 58px 6px rgba(0,0,0,0.37);
-moz-box-shadow: 13px 17px 58px 6px rgba(0,0,0,0.37);

`



export const Scop_all = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    overflow: scroll;
    align-items: center;
`


export const Div_Scop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    -webkit-box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    -moz-box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    width: 80%;
    height: 300px;
    border-radius: 2em;
    font-family: 'Public Sans';
    
`
export const Div_main = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 500px;
    background: url(${(p)=>p.url});
    -webkit-mask-image: linear-gradient(to left, transparent 15%, black 100%);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2em 0 0 2em;
`

export const Div_inf_msc = styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 140px;
    align-items: start;
    overflow: scroll;
    justify-content: start ;
    padding:10px;
    text-shadow: black;
    .Title{
        font-weight: bold;
        position: relative;
        right: 0;
        font-size: clamp(1rem, 2.5vw, 2rem); 
        text-overflow: ellipsis;
    }
    .Artist{
        position: relative;
        text-overflow: ellipsis;
        font-size: clamp(1rem, 2.5vw, 2rem); 
        opacity:90%
    }
`
export const Div_icon_download = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    svg{
        fill: ${Colors.Orange};
        width: clamp(4em, 100%, 60px);
        height: clamp(4em, 100%, 60px);
        cursor: pointer;
    }
`
export const Empty = styled.span`
    height: 10vh;
    width: 50%;
    background-color: red;
`