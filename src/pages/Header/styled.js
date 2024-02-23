import styled from "styled-components";

export const Div_Header = styled.div`
    display: flex;
    background-color: transparent;
    color: white;
    width: 8%;
    max-width: 500px;
    min-width: 140px;
    height: 100vh;
    font-size: 27px;
    padding: 0.3em;
    left: 0;
    flex-direction: column;

`

// -------- LOGO Header
export const Div_img = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
`
export const Logo_img = styled.img`

    width: 100%;
    height: 100%;
    max-height: 80px;
    max-width: 90px;
`

//------  CONTENT
export const Div_content = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
    div:hover{
        cursor: pointer;
    }
    .motion_header_options{
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`
export const Contents_header_div = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    height: 9vh;

`