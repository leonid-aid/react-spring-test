import styled from "styled-components";

import * as S from "./styles"
import { JsxElement } from "typescript";
const ButtonMain = styled.button`

background-color:orange;
width:360px;
height:50px;
border:none;
margin-top:20px;
margin-bottom:20px;
`
const Span=styled.span`
font-family:sans-serif;
font-size:17px;
color:white;
font-weight:700;
`

export const Button=({ label }: { label: string })=>{
    return(
    <ButtonMain>
        <Span>{label}</Span>
    </ButtonMain>
    );
}


/* ---------------------------------------------------------------------- */

const CardWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const TitleForTextCustom = styled.div`
font-size:46px;
font-weight:750;
color:${(ColorProps)=>ColorProps.color};
display:flex;
flex-direction:row;
`

export const Card=({icon, number, firstText, secondText, caption}:{icon:string, number:JSX.Element, firstText:string, secondText:string, caption:string})=>{
    return(
        <CardWrap>
            <img color="orange" src={icon}/>
            <TitleForTextCustom color="orange"> {firstText}{number}{secondText}</TitleForTextCustom>
            <S.SmallTitle>{caption}</S.SmallTitle>
        </CardWrap>
    )
}
