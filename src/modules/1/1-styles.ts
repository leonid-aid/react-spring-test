import styled from "styled-components";
import Back from "../../images/many-transport-trucks-parked-service-station-sunset-ai-generative5-min.jpg";
import { animated } from "react-spring";

export const Background = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items:center;
  background-image: url(${Back});
  background-position:center;
  background-size: cover;
  @media(min-width:1200px){
    height:900px;
  }
  @media(max-width:1199px){
    height:600px
  }
`;

export const Wrap = styled.div`
@media(min-width:1200px){
  margin-left:20%;

}
@media(max-width:1199px){
  
}
position: relative;
  width: 450px;
  height: 350px;
  displlay:flex;

`;

export const TextPlace = styled.div`
padding-top:30px;
position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left:10%;
  margin-right:10%;
  z-index: 2;
  background-color:white;
  border:1px solid black;

  & > * { 
    margin-left: 30px;
  }
`;

export const OrangeStub = styled.div`
  width: 100%;
  background-color: orange;
  height: 60%;
  position:absolute;
  top:20%;
  z-index: 1;
`;

export const TextPlaceAnimated = animated(TextPlace);
export const OrangeStubAnimated = animated(OrangeStub);
