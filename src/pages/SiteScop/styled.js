import styled from "styled-components";

import { Background } from "../../globalStyle";

import * as Colors from '../../globalStyle'

export const Site_scop = styled.div`
    display: flex;
    justify-content: start;
    background-color: ${Background};
    width: 100%;
    @media only screen and (max-width: 699px){
        .Header_app{
            display: none;
            backdrop-filter: blur(10px);
            position: absolute;
            width: 100%;
            max-width: 900px;
            right: 40%;
            background-color:#292929e1;
            align-items: center;
            width: 100%;
        }
        .hamburguer{
            display: flex;
        }
        .motion_header{
            z-index: 1;
            position: absolute;
            width: 30vw;
            margin: 0;
        }
    }
`
