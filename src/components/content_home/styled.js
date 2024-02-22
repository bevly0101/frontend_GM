import styled from "styled-components";

import * as Color from '../../globalStyle'

export const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    margin-top: 2em;
    justify-content: space-evenly;
    .decoration_page_img{
        width: 100%;
        max-width: 50vh;
    }
    @media only screen and (max-width: 699px){
        .Text_titile_home{
            font-size: 40px;
        }
}

`
export const Text_download = styled.p`
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: ${Color.Titles};
    width: 100%;
`
export const Scop_plataforms = styled.div`
    background-color: transparent;
    display: flex;
    height: 20vh;
    width: 100%;
    max-width: 900px;
    justify-content: space-evenly;
    align-items: center;
    margin: 2em;
    .cliked{
        box-shadow: 10px 10px 137px 0px rgba(0,0,0,0.57);
        -webkit-box-shadow: 10px 10px 137px 0px rgba(0,0,0,0.57);
        -moz-box-shadow: 10px 10px 137px 0px rgba(0,0,0,0.57);
        transform: translateY(-20px);
    }
    span{
        font-family: 'Public Sans', sans-serif;
    }
    `
export const Content_plataform = styled.div`
    transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86) ;
    background-color: transparent;
    width: calc(100% / 3);
    height: 16vh;
    max-width: 300px;
    border-radius: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    svg{
        fill: beige;
        width: 100%;
        height: 100%;
        max-width: 6em;
        max-height:6em;
    }
    .spficon{
        fill: #292929;
    }
    .yticon{
        fill:#292929;
    }
    .dzricon{
        fill: #292929;
    }
`
export const Scop_buttonGetit = styled.div`
    display: flex;
    opacity: 0%;
    background-color: ${Color.Background};
    width: 100px;
    border-radius: 0.4em;
    transition: all 500ms ease-out;

`
export const Button_getIt = styled.span`
    display: flex;
    width: 100%;
    max-width: 170px;
    background-color: ${Color.Background};
    justify-content: center;
    height: 4vh;
    border-radius: 0.7em;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    font-family: 'Public Sans', sans-serif;
    font-weight: bold;
    color: ${Color.MainBackground};
    transition: all 500ms ease-out;
`