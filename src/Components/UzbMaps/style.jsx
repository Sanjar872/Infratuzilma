import styled from "styled-components";
 
export const Container = styled.div`
    width:100%;
    height:100vh;
    border:1px solid red;
`
export const Foter = styled.div`
    display:flex;
    border:1px solid red;
    width:30%;
    h1 {
        font-size:18px;
    }
`

export const H1AND = styled.div`
    width:100%;
    border:1px solid red;
    h1 {
        color:white;
    }
`

export const BoX = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    @media screen and (max-width:1303px){
        display:flex;
        width:100%;
        border:1px solid red;
        justify-content:center;
        transform:scale(0.6)
    }
    @media screen and (max-width:1302px){
        display:flex;
        width:100%;
        transform:scale(0.6);
        display:flex;
        flex-direction:column;
    }
    @media screen and (max-width:1131px){
        display:flex;
        width:100%;
        transform:scale(0.8)
    }
   
    div {
        width:40%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        align-items:center;
        padding: 20px;
       @media screen and (max-width:600px) {
           width:100%;
           
       }
        
    }

`
export const Brendlar = styled.div`
    width:100%;
    height:650px;
    margin-top:70px;
    display:flex;
    justify-content:center;
    align-items: center;
    /* padding-right:400px; */
    border: 1px solid yellow;
    h1 {
        text-align: center;
        width: 100%;
    }
    @media screen and (max-width:1492px) {
        /* transform:scale(0.8) */
    }
    
    @media screen and (max-width:1079px) {
        display:flex;
        flex-direction:column;
    }
    @media screen and (max-width:1037px) {
        /* transform:scale(0.8); */
    }
    @media screen and (max-width:800px) {
        display:flex;
        width:100%;
        /* margin-left:-100px; */
        flex-direction:column;
        /* transform:scale(0.8) */
    }


`
export const Kompaniya = styled.img`
    width:35%;
    height: 25%;
    @media screen and (max-width:600px) {
            width:18%;
    }
    &:hover{
        cursor: pointer;
    }
    /* padding: 0 30px; */

`

export const PANd = styled.p`
    color:white;
    width:25%;
    padding :50px;
    border:1px solid red;
    font-size:24px;
    align-items:center;
    font-weight:700;
    text-align:center;
    @media screen and (max-width:854px) {
        width:100%;
    }
`

export const BredRasmlar = styled.img`
    width:100%;
    height:100px;
`
export const BredRasmlar5 = styled.img`
    width:180%;
    height:100px;
    border:1px solid red;

`
export const BredRasmlar6 = styled.img`
    width:100%;
    height:100px;
    margin-right:-50px;
    border: 1px solid red;
`
