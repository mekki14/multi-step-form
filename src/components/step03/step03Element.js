import styled from "styled-components"
import {BsCheck} from 'react-icons/bs'
export const AddonsContainer  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height:500px;
max-width: 700px;
@media (max-width:600px){
    height:auto;

    
    }
`
export const Content = styled.div`
display: flex;
flex-direction: column;
row-gap: 7px;
margin-bottom: 40px;
`
export const Heading= styled.h1`
margin-bottom: 6px;
font-size: 2.3rem;
font-weight: 700;
color:var(--Marine-blue);
`
export const SubHeading= styled.p`
margin:0;
color: var(--Cool-gray);
`
export const ItemsContainer = styled.div``


export const CheckContainer= styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CheckIcon = styled(BsCheck)`
  position: absolute;
  color:white;
  pointer-events:none;
  font-size:1.2rem;
  right:10px
`
export const CheckMark = styled.input`
  position: relative;

  margin: 0 10px 0 0;
  border: 1px solid var(--Light-gray);
  border-radius:4px ;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease-in-out;
  appearance: none;
  &:checked {
    background: var(--Purplish-blue);
     ${CheckIcon} {
      color:black
  }
}
`

export const Item= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding:20px;
border: 1px solid var(--Light-gray);
border-radius: 8px;
transition: all 0.2s ease-in-out;
cursor:pointer;
&:hover{
border: 1px solid var(--Purplish-blue);

}
&.is-active{
  background-color: var(--Alabaster);
border: 1px solid var(--Purplish-blue);

}
`
export const ItemContent = styled.div`
width:70%;
`
export const ItemHeading = styled.h3`
color:var(--Marine-blue);
margin: 0px;
margin-bottom: 7px;

`
export const Itemdesc = styled.p`
color:var(--Cool-gray);
margin: 0;

`
export const ItemPrice = styled.p`
color:var(--Purplish-blue);
margin: 0;
`

