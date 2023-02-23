import styled from "styled-components"
import MobBack from './assets/images/bg-sidebar-mobile.svg'


export const HomePage=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color:hsl(0, 0%, 100%) ;
    border-radius: 10px;
    padding: 15px;
    @media (max-width:600px){
        flex-direction: column;
        padding: 0px;
        background-color: transparent;
        border-radius: 0px;
        background-image: url(${MobBack});
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left:0;
    }
    
    `
export const FormGrp = styled.form`
    background-color:hsl(0, 0%, 100%) ;

max-width:500px;
width:570px;
height:570px;
margin:00px 70px;
display: flex;
flex-direction: column;
justify-content: space-between;
@media (max-width:600px){
    max-width:350px;
    margin:10px ; 
    border-radius: 10px;
    padding: 20px 40px;
    
    }

`
export const NextBtn=styled.button`
background-color: ${prop=>prop.confirm?"var(--Purplish-blue)":"var(--Marine-blue)"};
color: white;
padding:0.7rem 1.5rem;
border: none;
border-radius:4px ;
font-size: 1.2rem;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: hsl(213, 96%, 25%);
}
`
export const BackBtn=styled.button`
color: var(--Pastel-blue);
background-color: transparent;
border: none;
border-radius:4px ;
font-size: 1.2rem;
transition: all 0.2s ease-in-out;
&:hover{
    color: hsl(213, 96%, 25%);
    font-weight: 600;
}
`
export const BtnGrp = styled.div`
width: 500px;
display: flex;
justify-content: space-between;
box-sizing : border-box;
@media (max-width:600px){
    background-color: white;
    width: 100vw;
    position: fixed;
    bottom: 0%;
    left: 0;
    padding:10px 40px;
}
`
