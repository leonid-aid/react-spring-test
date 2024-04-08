import styled from "styled-components"
import BackImage from "../../images/container-truck5.jpg"
import { animated } from "react-spring"

export const BackGround = styled.div`

background-image:url(${BackImage});

display:flex;
align-items:center;
flex-direction:column;

`
export const SignState = styled.div`
    margin-top:100px;
    margin-left:25%;
    display:grid;
    grid-template-rows:repeat(2,400px);
    grid-template-columns:repeat(2,300px);
    gap:10px;
    background-color:white;
    padding:20px 20px 20px 20px;
`
export const SignStateAnimated = animated(SignState)