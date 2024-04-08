import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:orange;
`
export const Cards = styled.div`
display:grid;
grid-template-rows:repeat(2,400px);
grid-template-columns:repeat(3,400px);

`
export const Card = styled.div<CardInterface>`
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
background-image:url(${props => props.background});
padding:40px 40px 40px 40px;
width:100%-40px;
height:80%;
`
interface CardInterface{
    background:string;
}