import styled from "styled-components";

import { Colors_Home_header } from "../../globalStyle";

export const Home_header = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid ${Colors_Home_header.borderBottom} ;
    //margin-bottom: 2em;
`
export const Div_options = styled.div`
    width: 10%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    display: none;
    svg{
        width: 100%;
        height: 100%;
        max-width: 30px;
        max-height: 30px;
        fill: ${Colors_Home_header.user};
    }
    .motion_hamb{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`
export const Scop_content_header = styled.div`
    background-color: transparent;
    display: flex;
    width: 100%;
    height: 6vh;
    justify-content: space-around;
    align-items: center;
    
`

export const Scop_input_header = styled.div`
    background-color: transparent;
    //border: 1px solid #ef6817;
    background-color: ${Colors_Home_header.Input};
    height: 4.5vh;
    width: 70%;
    border-radius: 2em;
    display: flex;
    align-items: center;
    svg{
        width: 100%;
        height: 100%;
        max-height: 30px;
        max-width: 30px;
        margin: 1em;
        fill: ${Colors_Home_header.iconSearch};
        cursor: pointer;
    }
    input::placeholder{
        color: ${Colors_Home_header.colorInput_placeholder};
    }

`
export const Input_header = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
    height: 5vh;
    color: ${Colors_Home_header.colorInput};
`
export const Scop_userIcon_header = styled.div`
    background-color: transparent;
    width: 10%;
    min-width: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    svg{
        background-color: transparent;
        width: 100%;
        max-width:40px;
        max-height: 60px;
        height: 100%;
        fill: ${Colors_Home_header.user};
        cursor: pointer;
    }
`