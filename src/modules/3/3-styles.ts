import styled from "styled-components"
import Conteinerimg from "../../images/container-operation-port-series.jpg"
import { animated } from "react-spring"

export const BackGround1based = styled.div`
background-color:lightgray;
height:300px;


`
export const BackGround2 = styled.div`
background-color:white;
display:flex;
margin-bottom:200px;
`

export const Conteiner1 = styled.div`
width:30%;
background-image: url(${Conteinerimg});
`

export const Conteiner2 = styled.div`
background-color:white;
width:25%;
height:500px;
display:flex;
flex-direction:column;
align-items:center;
padding:20px 20px 20px 20px;
`
export const WrapperObj = styled.div`
display:flex;
justify-content:center;
margin-top:-200px;
width:100%;
`
export const BackGround1 = animated(BackGround1based);
export const Container1Animated = animated(Conteiner1);
export const Container2Animated = animated(Conteiner2);