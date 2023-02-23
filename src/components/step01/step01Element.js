import styled from "styled-components"

export const PersonalContainer  = styled.div`
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

export const FormContainer = styled.div``
export const FormGroup = styled.div`
display:flex;
flex-direction: column;
margin: 20px 0px;
`

export const FormLabel = styled.label`
color:var(--Marine-blue);
margin-bottom: 5px;
font-size:1rem;

`

export const Labels = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
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
&.Error {
    border:1px solid var(--Strawberry-red)
}


`


export const ErrorLabel = styled.label`
display:none;
&.Error {
    display: block;
    font-size: 14px;
    padding:0;
    font-weight: bold;
    color: var(--Strawberry-red);
}
`