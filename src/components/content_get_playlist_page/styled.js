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
    position: static;
    z-index: 1;


`
export const Img_pl = styled.img`
    width: 100%;
    max-width: 200px;
    margin: 0.6em;
    border-radius: 1em;
    box-shadow: 13px 17px 58px 6px rgba(0,0,0,0.37);
-webkit-box-shadow: 13px 17px 58px 6px rgba(0,0,0,0.37);
-moz-box-shadow: 13px 17px 58px 6px rgba(0,0,0,0.37);

`



export const Scop_all = styled.div`
    display: flex;
    bottom: 0;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    overflow: scroll;;
    border-bottom: 1px solid transparent;
    display: center;
    padding: 2em;
`

export const Div_Scop = styled.div`
    display: flex;
    margin-top: 2em;
    justify-content: center;
    box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
-webkit-box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
-moz-box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    width: 80%;
    border-radius: 2em;
    padding: 4em 0 4em 0;
    font-family: 'Public Sans';
    .img_music{
        width: clamp(4em,100%,160px);
        border-radius: 1em;
        background-color: antiquewhite;
        border: 1empx solid #ea4a00 ;
    }
    
`
export const Div_main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Div_inf_msc = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 180px;
    align-items: start;
    justify-content: center ;
    padding: 0 0 0 10px;
    .Title{font-weight: bold;}
    .Artist{opacity:60%}
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