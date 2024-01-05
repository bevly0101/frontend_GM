import styled from "styled-components";

import * as Colors from '../../globalStyle'

export const Scop_all = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    overflow: scroll;
`

export const Div_Scop = styled.div`
    display: flex;
    margin-top: 2em;
    justify-content: center;
    border: 1px solid ${Colors.Background_50opc};
    width: 80%;
    border-radius: 2em;
    padding: 3em;
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