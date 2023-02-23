import styled from "styled-components"

export const PlanContainer  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height:480px;
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

export const TierContainer = styled.div``

export const Tiers= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
column-gap: 15px;
@media (max-width:600px){
  flex-direction: column;
  row-gap: 15px;
  column-gap: 0px;


    
    }
`
export const Tier= styled.div`
width: 150px;
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
@media (max-width:600px){
  display: flex;
  flex-direction: row;
  width: 86%;
  row-gap: 1px;
  column-gap: 10px;
    }
  ${props=>props.Error?
    `border:1px solid var(--Strawberry-red)`
  :`border: 1px solid var(--Light-gray)`
  }

`
export const  Icon= styled.img`
margin-bottom: 40px;
@media (max-width:600px){
  margin-bottom: 0px;
  
    }

  `

export const TierContent= styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;

`

export const TierHead= styled.h3`
color:var(--Marine-blue);
margin: 0;
padding: 0;
  `
export const TierInfo= styled.p`
margin: 0;
padding: 0;
color: var(--Cool-gray);

`
export const FreeOpt= styled.p`
display:${props=>props.year?"block":"none"};
color:var(--Marine-blue);
margin: 0;
padding: 0;
`

export const MonthYearToggle = styled.div`
background-color: var(--Alabaster);
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding:10px 5px;
border-radius: 10px;

`

export const Month= styled.div`

&.active{
  font-weight: 700;
}
`

export const Toggle = styled.input`

`

export const Switch = styled.label`
background-color: var(--Marine-blue);
border-radius: 15px ;
padding:3px;
margin:0 5px;
width:35px;
display: flex;
align-items: center;
justify-content: right;
&.month{
  justify-content:left;
}
`

export const Circle = styled.div`

border-radius: 50%;
background-color: var(--White);
width:15px;
height:15px;

`

export const Year = styled.div`
&.active{
  font-weight: 700;
}
`
 

export const FormInput = styled.input`

height: 38px;
font-size:1rem;
border: 1px solid var(--Light-gray);
border-radius: 5px;
margin-bottom: 5px;
color: var(--Marine-blue);
font-weight: 600;
outline: none;
background-color: transparent;
&::placeholder{
font-weight: 500;

}
&:focus{
border: 1px solid var(--Purplish-blue);
background-color: transparent;


}
`
export const ErrorTag = styled.p`
display:none;
&.Error {
    display: block;
    font-size: 16px;
    padding:0;
    font-weight: bold;
    color: var(--Strawberry-red);
}
`