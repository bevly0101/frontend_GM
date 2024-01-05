import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    .decoration_page_img{
        width: 100%;
        max-width: 60vh;
    }
    h1{
        font-size: 50px;
        font-family: 'Anton', sans-serif;
        font-weight: 500;
        color: #292929;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`