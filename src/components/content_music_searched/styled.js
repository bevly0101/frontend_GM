import styled from "styled-components";

import * as Colors from '../../globalStyle'
import { func } from "prop-types";

export const Scop_all = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75vh;
    overflow: scroll;;
    align-items: center;
`

export const Div_Scop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    -webkit-box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    -moz-box-shadow: 6px -5px 57px -9px rgba(0,0,0,0.36);
    width: 80%;
    height: 15vh;
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
    height: 100%;
    align-items: start;
    justify-content: center ;
    padding: 0 0 0 10px;
    text-shadow: black;
    .Title{
        font-weight: bold;
        position: relative;
        right: 0;
    }
    .Artist{
        position: relative;
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
export const Results_from = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    padding: 1.7em;
    font-family: 'Public Sans';
    `
export const Index = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    `



export const Change_results = styled.div`
    font-family: 'Public Sans';
    display: flex;
    flex-direction: column;
    align-items:start;
    width: 100%;
    background-color: transparent;
    span{
        font-size: 22px;
        width: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
        border-bottom: 3px solid transparent;
    }
    span:nth-child(${function(props){return props.showit+1}}){
        border-bottom: 3px solid red;

    }
    .changed{
        width: 50%;
        height: 3px;
        background-color: red;
    }
`
export const Result_options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

`