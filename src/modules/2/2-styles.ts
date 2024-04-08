import styled from "styled-components"
import { animated } from "react-spring"

export const BackGround1 = styled.div`
background-color:orange;
height:500px;
display:flex;
align-items:center;
flex-direction:column;
:first-child{
    margin-top:30px;
}
`
export const BackGround2 = styled.div`
background-color:lightgray;
height:600px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center; 
`

const Card = styled.div`
background-color:white;
width:400px;
height:600px;
display:flex;
flex-direction:column;
margin-top:-200px;
padding:40px 40px 40px 40px;`

export const AnimatedCard = animated(Card);
export const CardsWrap = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
`