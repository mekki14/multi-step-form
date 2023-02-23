import styled from "styled-components";
import DeskBack from '../../assets/images/bg-sidebar-desktop.svg'
import MobBack from '../../assets/images/bg-sidebar-mobile.svg'
export const SideBarContainer= styled.div`

  background-image: url(${DeskBack});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 674px;
  width:324px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding:30px ;
  @media screen and (max-width:600px) {
    //background-image:url(${MobBack});
    background-image:none;
    width:100vw;
    flex-direction: row;
    height: 150px;
    align-items: center;
    justify-content: space-around;
    

    
}
`
export const InfoElement= styled.div`
display: flex;
flex-direction: row;
width: 200px;
margin: 18px 5px;
@media (max-width:600px) {
  width:auto;
  margin: 0;
}
`
export const InfoContent = styled.div`
display: flex;
flex-direction: column;
row-gap: 5px;
@media screen and (max-width:600px) {
    display: none;
}
`
export const InfoNo = styled.div`

border: 1px solid var(--White);
color: var(--White);
font-weight: 500;
padding:7px;
margin-right: 20px;
border-radius: 50%;
height: 20px;
width: 20px;
display: flex;
justify-content: center;
align-items: center;
&.is-active{
  border: 1px solid var(--Pastel-blue);
  background-color: var(--Pastel-blue);
}
@media screen and (max-width:600px) {
    margin: 0;
}
`
export const InfoMean = styled.h2`
color:var(--White);
font-size: 0.9rem;
letter-spacing: 2px;
font-weight: 600;
padding: 0;
margin: 0;

`
export const InfoStep = styled.p`
color:var(--Pastel-blue);
padding:0;
margin: 0;
font-size: 0.9rem;

`