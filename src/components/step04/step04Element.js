import styled from "styled-components"

export const SummaryContainer  = styled.div`
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

export const FormContainer = styled.div``
export const FileContainer = styled.div`
background-color: var(--Alabaster);
padding: 15px ;
border-radius:7px ;
`
export const FileHeading = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom:15px;
`
export const FileContent = styled.div`
`
export const FileType = styled.h3`
margin:0;
padding:4px 0;
color:var(--Marine-blue)
`
export const FileChange = styled.p`
margin:0;
padding:4px 0;
text-decoration: underline;
color: var(--Cool-gray);
cursor: pointer;
`
export const FilePrice = styled.h3`
margin:0;
padding:4px 0;
color:var(--Marine-blue);
`
export const Divider = styled.div`
height:1px ;
background-color: var(--Light-gray);
margin:10px 0
`
export const Addon = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between`
export const AddonHeading = styled.p`
color:var(--Cool-gray);
`
export const AddonPrice = styled.p`
color:var(--Marine-blue);
`
export const TotalContainer = styled.div`
display:flex;
margin:12px 15px;
flex-direction:row;
align-items: center;
justify-content:space-between`
export const TotalTitle = styled.p``
export const TotalPrice = styled.h2`
color:var(--Purplish-blue);

`
