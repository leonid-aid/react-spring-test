import styled from "styled-components"

export const BigTitle = styled.span`
font-size:40px;
font-weight:600;
`


export const SmallTitle =styled.span`
text-transform:uppercase;
font-size:20px;
font-weight:350;
padding-top: 20px;
`
    
export const Text = styled.p`
font-size:20px;
color:${(ColorProps)=>ColorProps.color};
`
interface ColorProps{
    color:string;
}
export const TitleForText = styled.span<ColorProps>`
font-size:46px;
font-weight:750;
color:${(ColorProps)=>ColorProps.color};
`