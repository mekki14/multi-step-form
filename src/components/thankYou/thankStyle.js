import styled from "styled-components"

export const ThankContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//padding:0px 80px;
margin:00px 70px;
text-align: center;
max-width:500px;
width:570px;
height:570px;
 @media (max-width:600px){
    background-color: white;
    border-radius: 12px;
padding:0px 40px;

   width:300px;
   height:420px;
font-size: 2rem;


 }

`
export const ThankHead = styled.h1`
color:var(--Marine-blue);
padding:0;
font-size: 2.7rem;
@media (max-width:600px){
   
font-size: 2rem;


 }

`
export const ThankDetail = styled.p`
color: var(--Cool-gray);
font-size: 1.1rem;
line-height: 1.5rem;
margin:0
`