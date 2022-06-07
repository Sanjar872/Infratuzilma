import styled from "styled-components";

import BagRasm from '../../Img/img1.png'
import Text from '../../Img/INFRATUZILMA.png'

import WidgetsIcon from '@mui/icons-material/Widgets';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import AndijonQarta from '../../ImgFoter/AndijonQartasi.png'

export const MyWidgetsIcon = styled(WidgetsIcon)`
    color:white !important;
`
export const MyRocketLounchIcon = styled(RocketLaunchIcon)`
    color:white;
`
export const MyPhoneIcon = styled(PhoneIcon)`
    color:white;
    
`

export const Container = styled.div`
    width:100%;
    height:100vh;
    justify-content:center;
    background-image: url(${BagRasm});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
  overflow-y: scroll;

    
`
export const Con = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding:15px;

`
export const Infra = styled.div`
    width:100%;
    height:80px;
    display:flex;
    margin-top:50px;
    justify-content:center;
    align-items:center;
    color:white;
    background-image: url(${Text});
    background-position:center;
    background-repeat:no-repeat;
    background-size:contain;
`

export const Logodiv = styled.div`
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;


`

export const Navbar = styled.nav`
    width:90%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;
    overflow: hidden;
    
    

    ul{
        width:70%;
        justify-content:space-between;
        display:flex;
        list-style:none;
        
    }
    
    select{
        border-radius:12px;
        height:25px;
        width:60px;
        color:white;
        padding-left:3px;
        background:none;
        outline:none;
        
    }

    option {
        background-color:grey;
        &:hover{
            
        }

    }
`
export const QartaSection = styled.div`
    width:100%;
    height:550px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;
    padding: 0 5%;
    @media screen and (max-width:1250px) {
        transform:scale(0.8);
        widows:100%;
    }

    
    @media screen and (max-width:960px) {
        flex-direction:column;
        height:680px;
        display:flex;
        border:1px solid red;
        justify-content:space-between
    }
    @media screen and (max-width:568px) {
        height:500px;
        align-items: flex-start;
        
    }
    @media screen and (max-width:508px) {
        height:450px;
        justify-content:space-between;
        
    }
    @media screen and (max-width:385px) {
        height:350px;
        
    }
    @media screen and (max-width:385px) {
        
    }
`
export const Ozbekiston = styled.div`
    width:50%;
    height:400px;
    border:1px solid green;
    display:flex;
    flex-direction:column;
    color:white;
    @media screen and (max-width:640px) {
        width:100%;
        height:300px;
    }
   

`
export const PP3 = styled.p`
     width:75%;
        height:200px;
        line-height:30px;
        font-size:18px;
        padding-left:30px;

        @media screen and (max-width:838px) {
        width: 100%;
        height:400px;
        line-height:25px;

        text-align:center;
    }
    @media screen and(max-width:818px) {
            text-align:center;
            display:flex;
            width:110%;
        transform: scale(0.7);
    }
`
export const H33 = styled.h3`
    font-size:24px;
    padding:20px;
    padding-left:30px;
    @media screen and (max-width:838px) {
        width: 100%;
        font-size:20px;
        text-align:center;
    }
    
`
export const Bar = styled.div`
    width:10%;
    height:250px;
    padding:25px;
    display:flex;
    align-items:center;
    ul{
        width:10%;
        height:250px;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        list-style:none;
    }
    li{
        width:40px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        background: rgba(255, 255, 255, 0.1);
        &:hover {
            background-color:rgba(255, 255, 255, 0.5);
            transform:1s;
            transform:scale(1.3);
            cursor: pointer;
        }
    }
`

export const Mapuzb = styled.div`
    width:50%;
    height:250px;
    margin-top:50px;
    border:1px solid yellow;
    position:relative;
    @media screen and (max-width:1235px) {
        transform:scale(0.8)
    }
  
    @media screen and (max-width:1030px) {
        transform:scale(0.7)
    }
  
    @media screen and (max-width:912px) {
        transform:scale(0.6)
    }
    @media screen and (max-width:767px) {
        transform:scale(0.5);
        /* margin-left:-100px; */
        display:flex;
        width:100%;
        flex-direction:column;
    }
    @media screen and (max-width:530px) {
        transform:scale(0.4);
        margin-left:-30px;
    }
    @media screen and (max-width:350px) {
        width:100%;
        transform:scale(0.3);

    }
    @media screen and (max-width:250px){
        transform:scale(0.2);
        margin-top:20px;
        

        
    }

`
export const MapsUzb = styled.div`
   height:400px;
   width:100%;
   border:1px solid red;
   justify-content:center;
    @media screen and (max-width:1250px) {
        /* transform:scale(0.8) */
        width:100%;
    }

    @media screen and (max-width:578px){
        /* margin-top:-150px; */
    }
    @media screen and (max-width:573px){
        /* margin-top:-200px; */
    }
    @media screen and (max-width:474px){
        
        /* transform:scale(0.9) */
    }
  
  
  
`
export const Img = styled.img`
     /* width:100%;
     height:300px; */

    @media screen and (max-width:436px){
    }
   
`

export const ImgKora = styled.img`
    opacity:0.5;
    
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:5.2;
        

        
    }
`
export const Imgdiv = styled.p`
    text-align:center;
    justify-content:center;
    display:flex;
    position:absolute;
    top:-80px;
    left:67px;
    width:100px;
    
`

export const MyLocationOnIcon = styled(LocationOnIcon)`
    color:white;
    position:absolute;
    font-size:35px !important;
    top:105px;
    left:50px;
    width:300px;
    opacity:0.5;
    &:hover{
        opacity:5.2;

    }

`

export const MyLocationOnIconXorazm = styled(LocationOnIcon)`
     color:white;
    position:absolute;
    font-size:35px !important;
    top:-10px;
    left:5px;
`

export const Xorazmdiv = styled.p`
    position:absolute;
    top:99px;
    opacity:0.5;
    left:146px;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:5.2;

        
    }
`

export const Novoidiv = styled.div`
     position:absolute;
    top:10px;
    left:208px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
    }
`
export const MyLocationOnIconNovoi = styled(LocationOnIcon)`
      color:white;
    position:absolute;
    font-size:35px !important;
    top:30px;

    left:65px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
        
    }
`




export const Buxorodiv = styled.div`
       position:absolute;
    top:124px;
    left:224px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
    }
`

export const MyLocationOnIconBuxoro = styled(LocationOnIcon)`
       color:white;
    position:absolute;
    font-size:35px !important;
    top:30px;

    left:65px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
        
    }
`

export const Jizzaxdiv = styled.div`
        position:absolute;
    top:135px;
    left:385px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
    }
`
export const MyLocationOnIconJizzax = styled(LocationOnIcon)`
        color:white;
    position:absolute;
    font-size:35px !important;
    top:10px;
    left:20px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
        
    }
`
export const Karshidiv = styled.div`
         position:absolute;
    top:217px;
    left:303px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
    }
`

export const Samarqanddiv = styled.div`
          position:absolute;
    top:165px;
    left:331px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
    }
`

export const MyLocationOnIconKarshi = styled(LocationOnIcon)`
          color:white;
    position:absolute;

    font-size:35px !important;
    top:-5px;
    left:30px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
        
    }
`

export const Termizdiv = styled.div`
         position:absolute;
    top:241px;
    left:381px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`

export const MyLocationOnIconTermiz = styled(LocationOnIcon)`
           color:white;
    position:absolute;

    font-size:35px !important;
    top:-5px;
    left:30px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`

export const Tashkentdiv = styled.div`
           position:absolute;
    top:87px;
    left:459px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconTashkent = styled(LocationOnIcon)`
            color:white;
    position:absolute;

    font-size:35px !important;
    top:20px;
    left:20px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`

export const Toshdiv = styled.div`
            position:absolute;
    top:148px;
    left:438px;
    opacity:0.5;
    width:100px;
`

export const Andijondiv = styled.div`
              position:absolute;
    top:145px;
    left:565px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconAndijon = styled(LocationOnIcon)`
             color:white;
    position:absolute;

    font-size:35px !important;
    top:-20px;
    left:15px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`

export const Namangandiv = styled.div`
               position:absolute;
    top:158px;
    left:520px;
    opacity:0.5;
    /* border:1px solid red; */
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconNamangan = styled(LocationOnIcon)`
               color:white;
    position:absolute;

    font-size:35px !important;
    top:-20px;
    left:15px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`
export const Ferganadiv = styled.div`
                position:absolute;
    top:115px;
    left:522px;
    opacity:0.5;
    width:100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconFer = styled(LocationOnIcon)`
                 color:white;
    position:absolute;

    font-size:35px !important;
    top:-5px;
    left:30px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`
export const Operator = styled.div`
    display:flex;
    @media screen and (max-width:935px) {
            width:100%;
            display:none;
            justify-content:center;
            margin-top:-100px;
            position:fixed;
        }
    align-items:center;
    justify-content:space-between;
    position:absolute;
    position:fixed;
    top:650px;
    right:100px;
    cursor: pointer;
    transition: 1s;
    &:hover{
    transform:rotateX(360deg);
    transition: 1s;
       
    }
    h1 {
        color:white;
    }
`

//Main qism boshlandi 

export const MainContainer = styled.div`
    width:100%;
    height:550px;
    margin-top:150px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media screen and (max-width:1205px){
        width:100%;
        transform:scale(0.8);
    }
    @media screen and (max-width:1205px){
        width:100%;
        transform:scale(0.7)
    }
    @media screen and (max-width:999px){
        width:100%;
        display:flex;
        justify-content:center;
        transform:scale(0.6);
    }
    @media screen and (max-width:960px){
        width:100%;
        display:flex;
        flex-direction:column;
    }
    @media screen and(max-width:585px){
        margin-top:50px;
    }   
`
export const H111 = styled.h3`
        font-weight:700;
        font-size:24px;
        padding-left:20px;
        width:100%;
        display:flex;
      
            
        @media screen and (max-width:588px){
            text-align:center;
            display:flex;
            width:100%;

        }

        @media screen and(max-width:385px){
        margin-top:50px;
    }   
`

export const Promax = styled.p`
          width:100%;
    justify-content:center;
    font-weight: 400;
    padding:20px;
    height:200px;
    border:1px solid red;
    font-size: 20px;
    line-height: 137.7%;
    @media screen and (max-width:838px) {
        text-align:center;
    }    


    @media screen and(max-width: 588px){
        text-align:center;
            display:flex;
            justify-content:center;
            width:100%;

    }
    @media (max-width:581px) {
        width:100%;
        height:250px;
    }
  
`
export const MainMatn = styled.div`
    width:65%;
    height:500px;
    color:white;
    display:flex;
    padding:0 5%;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:999px){
        margin-right:25px;
        margin-top:-120px;
        width:100%;
        
    }
   
    @media screen and(max-width:385px){
        margin-top:50px;
        width:100%;
    }   



     
       
    
   
`   

export const Krug1 = styled.div`
    color:white;
    width:50px;
    height:50px;
    top:55px;
    left:-135px;
    align-items:center;
    display:flex;
    justify-content:center;
    flex-direction:column;
    position:relative;
    &:hover{
        transform:scale(1.1);
        transform:1s;
        cursor: pointer;
        
    }
    span{
    font-size:25px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    text-transform: capitalize;
}
    p{
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-transform: capitalize;
    color: #FFFFFF;
    padding-left:10px;

    }
`

export const Krug2 = styled.div`
     color:white;
    width:50px;
    height:50px;
    top:185px;
    left:-455px;
    @media screen and (max-width:1190px){
            /* padding-left:20px;         */
    }
    @media screen and (max-width:1139px){
            /* padding-left:35px;   */
            /* margin-top:-40px; */
    }
    display:flex;
    flex-direction:column;
    position:relative;
    &:hover{
        transform:scale(1.1);
        transform:1s;
        cursor: pointer;
        
    }
    span{
    font-size:25px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    text-transform: capitalize;
}
p{
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-transform: capitalize;
    color: #FFFFFF;
    padding-left:10px;

    }
`

export const Krug3 = styled.div`
      color:white;
    width:50px;
    height:50px;
    top:350px;
    left:-230px;
    display:flex;
    flex-direction:column;
    position:relative;
    &:hover{
        transform:scale(1.1);
        transform:1s;
        cursor: pointer;
        
    }
    span{
    font-size:25px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    text-transform: capitalize;
}
p{
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-transform: capitalize;
    color: #FFFFFF;
    padding-left:10px;

    }
    @media screen and (max-width:1139px){
            /* padding-left:20px;   */
            /* margin-top:-40px; */
    }
`

export const Qwer = styled.div`
    width:50%;
    height:650px;
    display:flex;
    justify-content:center;
    text-align:center;
    margin-top:20px;
    padding-left:100px; 
    @media screen and(max-width:964px){
        transform:scale(0.8);
        margin-top:80px;
    }
    @media screen and(max-width:999px){
        transform:scale(0.2);
        margin-left:-100px;
    }
    @media screen and(max-width:999px){
        transform:scale(0.2);
        margin-left:-100px;
    }

    @media screen and (max-width:781px){
        margin-top:100px;
    }
   
`
export const Krug4 = styled.div`
        color:white;
    width:50px;
    height:50px;
    top:510px;
    left:-535px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    &:hover{
        transform:scale(1.1);
        transform:1s;
        cursor: pointer;
        
    }
    span{
    font-size:25px;
    font-style: normal;
    font-weight: 700;
    display:flex;
    justify-content:center;
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    text-transform: capitalize;
}
p{
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-transform: capitalize;
    color: #FFFFFF;
    padding-left:10px;

    }
    /* @media screen and (max-width:1190px){
            padding-left:20px;        
    }
    @media screen and (max-width:1139px){
            padding-left:20px;  
            margin-top:-50px;
    }
    @media screen and (max-width:1139px){
            padding-left:20px;  
            margin-top:-50px;
    } */
`

// export const Logika = styled.div`
//     width:100%;
//     display:flex;
//     border:1px solid red;
//     justify-content:center;
//     text-align:center;
//     align-items:center;
// `

export const MainMaps = styled.div`
    width:100%;
    height:500px;
    display:flex;
    border:1px solid green;
    margin-top:50px;
    justify-content:center;
    align-items:center;

    /* padding:0 5%; */

    @media screen and (max-width:1303px){
        display:flex;
        height:800px;
        width:100%;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
    }

    @media screen and (max-width:960px){
        display:flex;
        margin-top:100px;
        height:800px;
        border:1px solid yellow;
        justify-content:space-between;
        flex-direction:column;
    }

`

export const Digital = styled.div`
    width:50%;
    height:400px;
    align-items:center;
    color:white;
    display:flex-start;
    flex-direction:column;
    /* padding-left:50px; */
    padding:0px 40px;
    border:1px yellow solid ;
    padding-top:50px;
    /* padding:100px; */
    h1{
    }

    /* p{
        width:100%;
        display:flex;
        justify-content:center;
        font-weight:400;
        
        align-items:center;
        font-size:18px;
        line-height: 137.7%;
    } */

    @media screen and (max-width:959px){
        width:100%;
        height:300px;
    }
`

export const PEY = styled.p`
    width:80%;
    @media screen and (max-width:599px) {
        width:100%;
    }


    @media screen and (max-width:837px) {
        display:flex;
    text-align:center;   
    width:100%;
    
    }
`
export const HHH1 = styled.h1`
    @media screen and (max-width:528px){
        font-size:25px;
        text-align:center;
    }
`
export const AndijonMaps = styled.div`
    width:50%;
    /* border:1px solid blanchedalmond; */
    height:500px;
    position:relative;
    @media screen and (max-width:1234px) {
        margin-top:50px;
    }
    
    /* @media screen and (max-width:755px) {
        background-image: url(${AndijonQarta});
        background-repeat: no-repeat;
        width:100%;
        display:flex;
        justify-content:center;
        transform: scale(0.6);
    } */

`


export const AndMaps = styled.div`
    display:flex;
    width:50%;
    border:1px solid red;
    justify-content:center;
    /* align-items:center; */
    
`

export const AndijonSH = styled.div`
    position:absolute;
    top:78px;
    left:135px;
    display:flex;
    justify-content:center;
    /* opacity:0.5; */
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const ImgQurgontepaBinosi = styled.img`
    color:white;
    position:relative;
    font-size:35px !important;
    top:40px;
    width:50px;
    height:50px;
    left:-120px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
 
   }
`
export const JalaquduqSh = styled.div`
    position:absolute;
    top:83px;
    left:136px;
    display:flex;
    justify-content:center;
    /* border:1px solid red; */
    /* opacity:0.5; */
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconJalaquduqSH = styled.img`
    color:white;
    position:relative;
    font-size:35px !important;
    top:40px;
    width:45px;
    height:45px;
    left:-80px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`
export const XujabotSH = styled.div`
      position:absolute;
    top:158px;
    left:90px;
    display:flex;
    justify-content:center;
    /* border:1px solid red; */
    /* opacity:0.5; */
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconXujabotSH  = styled.img`
    color:white;
    position:relative;
    font-size:35px !important;
    top:10px;
    width:55px;
    height:50px;
    left:-100px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`
export const BuloqboshiSH = styled.div`
       position:absolute;
    top:185px;
    left:80px;
    display:flex;
    justify-content:center;
    /* border:1px solid red; */
    /* opacity:0.5; */
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const MyLocationOnIconBuloqboshiSH  = styled.img`
    color:white;
    position:relative;
    font-size:35px !important;
    top:10px;
    width:35px;
    height:35px;
    left:-80px;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8 ;
 
   }
`
export const MarxamatSH = styled.div`
       position:absolute;
    top:195px;
    left:10px;
    display:flex;
    justify-content:center;
    object-fit:contain;

    /* border:1px solid red; */
    /* opacity:0.5; */
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`

export const ImgMarxamatBinosi = styled.img`
        position:relative;
    top:25px;
    width:55px;
    height:55px;
    width:100px;
    left:-100px;
`
export const AndojonSHa = styled.div`
        position:absolute;
    top:67px;
    left:35px;
    display:flex;
    justify-content:center;
    /* border:1px solid red; */
    /* opacity:0.5; */
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const ImgAndijonBinosi = styled.img`
          position:relative;
    top:5px;
    width:100px;
    height:100px;
    object-fit:contain;
    left:-110px;
    z-index:99;
    box-shadow:#90909090;
    
`

export const PaxtabodSH = styled.div`
        position:absolute;
    top:-8px;
    left:50px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
        
    }
`
export const ImgPaxdabodBinosi = styled.img`
            position:relative;
    top:-10px;
    width:70px;
    height:70px;
    width:100px;
    left:-100px;
    border-radius:50%;
    
    &:hover {
  

    }
`

export const IzboskanSH = styled.div`
           position:absolute;
    top:10px;
    left:-5px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`

export const ImgIzboskanBinosi = styled.img`
              position:relative;
    top:30px;
    width:35px;
    height:40px;
    width:100px;
    left:-130px;
`

export const Oltinkul = styled.div`
            position:absolute;
    top:105px;
    left:-80px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
    z-index:99;

        
        
    }
`
export const ImgOltinkulBinosi = styled.img`
               position:relative;
    top:-10px;
    width:45px;
    height:45px;
    left:-100px;
    z-index:99;
`

export const BaliqchiSH = styled.div`
            position:absolute;
    top:70px;
    left:-165px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const UlugnorSH = styled.div`
            position:absolute;
    top:70px;
    left:-247px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`
export const ImgUlugnorBinosi = styled.img`
                position:relative;
    top:30px;
    width:70px;
    height:70px;
    width:100px;
    left:-120px;
`
export const ImgBaliqchiBinosi = styled.img`
               position:relative;
    top:-30px;
    width:70px;
    height:70px;
    width:100px;
    left:-180px;
`
export const BostonSH = styled.div`
             position:absolute;
    top:130px;
    left:-115px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
        
        
    }
`

export const ImgBostonBinosi = styled.img`
               position:relative;
    top:10px;
    width:70px;
    height:50px;
    width:50px;
    left:-80px;
`
export const ShaxrixonSHA = styled.div`
             position:absolute;
    top:110px;
    left:-75px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
    }  
`
export const ImgShaxrixonBinosi = styled.img`
                 position:relative;
    top:20px;
    width:50px;
    height:40px;
    width:40px;
    left:-70px;
    z-index:99;
`
export const AsakaSH = styled.div`
              position:absolute;
    top:150px;
    left:-30px;
    display:flex;
    justify-content:center;
    &:hover{
        transition:1s;
        transform:scale(1.1);
        cursor: pointer;
        opacity:8.8;
    }  
`
export const  ImgAsakaBinosi = styled.img`
                  position:relative;
    top:10px;
    width:50px;
    height:50px;
    width:100px;
    left:-100px;
`

export const Harakatlar = styled.div`
    width:100%;
    height:400px;
    display:flex;
    text-align:center;
    justify-content:center;
`
export const Harakatdiv = styled.div`
    color:white;
    width:25%;
    height:250px;
    display: flex;
    text-align:center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width:1304px) {
            width:80%;
    }

    
    h1{
        width:100%;
        height:70px;
        display:flex;
        justify-content:center

    }
    h3{
        width:100%;
        text-align:center;
        height:100px;
        font-size:18px;
        display:flex;
        justify-content:center;
font-weight: 400;
line-height: 28px;

    }
`
export const Griddiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    

`
export const Cardlar = styled.div`
    display:flex;
    grid-template-columns:1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    justify-content: center;

    gap:40px;

    div{
        display: flex;
        width:250px;
        justify-content: center;
        align-items: center;
        height:180px;

        p{
        color:white;
font-weight: 200;
font-size: 13px;
line-height: 17px;
text-align: center;
text-transform: uppercase;

        }
    }
`
export const LiniDiv = styled.div`
    width:100%;
    display:flex;
    background-repeat:no-repeat;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:599px) {
     transform:scale(0.9);   
    }
    @media screen and (max-width:530px) {
     transform:scale(0.7); 
     width:100%;
     font-size:10px;
    }   
    div{
        /* position:relative; */
        z-index:999;
    }
    img{
    }
`
export const IMGG = styled.img`
    @media screen and (max-width:539px) {
        display:none;
    }
`
// export const LL = styled.div`
    
// `

export const Border = styled.div`
    display:flex;
    padding-left:50px;
    width:100%;
    height:auto;
    margin-top:-135px;
    justify-content:center;
    
    img{
    display:flex;
    justify-content:center;
    right:595px;
    z-index:999;

    }
`
export const Paragraov = styled.div`
    width:20%;
    color:white;
    font-size:12px;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    p{

    }
    
    span {
        @media (max-width:884px){
            width:100%;
            font-size:10px !important;
        }
        @media (max-width:816px){
            width:100% !important;
            font-size:10px !important;
        }
        @media (max-width:530px){
        font-size:8px !important;
        width:120px !important;
        }

        :nth-child(1){
            height: 200px;
            display: flex;
            align-items: flex-end;
        }
        :nth-child(2){
            height: 100px;
            display: flex;
            align-items: center;
            margin-right: -60px;
            
            width: 150px;
        }
        
        :nth-child(3){
            height: 125px;
            display: flex;
            align-items: flex-end;
            padding-top:30px;
            padding-left:20px;
        }
        :nth-child(4){
            height: 100px;
            display: flex;
            padding-left:-50px;
            align-items: flex-end;
            margin-right: -78px;
            margin-left:20px;
            width: 170px;


        }
        :nth-child(5){
            height: 140px;
            display: flex;
            padding-left:50px;
            align-items: flex-end;
        }
        :nth-child(6){
            height: 55px;
            display: flex;
            padding-top:80px;
            margin-top:50px;
            padding-left:270px;
            align-items: flex-end;
        }
        :nth-child(7){
            height: 150px;
            display: flex;
            padding-left:80px;
            align-items: flex-end;
        }
        :nth-child(8){
            height: 90px;
            display: flex;
            margin-top:30px;
            padding-left:20px;
            margin-right:-80px;
            align-items: flex-end;
            width:200px;
        }
        :nth-child(9){
            height: 100px;
            display: flex;
            padding-left:40px;
            margin-top:30px;
            padding-left:20px;
            margin-right:-15px;
            align-items: flex-end;
        }
    }
    
    `
   
    
   export const Paragraov2 = styled.div`
   width:20%;
   color:white;
   display:flex;
   flex-direction:column;
   align-items: flex-start;

   
    span {
        @media (max-width:884px){
            width:100%;
            font-size:10px !important;
        }
        @media (max-width:816px){
            width:100% !important;
            font-size:10px !important;
        }
        @media (max-width:530px){
        font-size:8px !important;
        width:120px !important;
    }
        :nth-child(1){
            height:100px;
            margin-top:250px;
            width:300px;
            font-size:12px;
            margin-left:-40px;

        }
        :nth-child(2){
            height:100px;
            margin-top:20px;
            width:300px;
            padding-top:15px;
            font-size:12px;
            margin-left:-110px;
        }:nth-child(3){
            height:100px;
            margin-top:20px;
            width:300px;
            padding-top:12px;
            font-size:12px;
            margin-left:-45px;
        }:nth-child(4){
            height:100px;
            margin-top:5px;
            width:300px;
            padding-top:10px;
            font-size:12px;
            margin-left:-108px;
        }:nth-child(5){
            height:100px;
            margin-top:105px;
            width:300px;
            padding-top:15px;
            font-size:12px;
            margin-left:-110px;
        }:nth-child(6){
            height:50px;
            margin-top:80px;
            width:300px;
            padding-top:12px;
            font-size:12px;
            margin-left:-60px;
        }:nth-child(7){
            height:80px;
            width:300px;
            margin-top:20px;
            padding-top:15px;
            font-size:12px;
            margin-left:-110px;
        }:nth-child(8){
            height:50px;
            width:300px;
            margin-top:30px;
            padding-top:15px;
            font-size:12px;
            margin-left:-220px;
        }:nth-child(9){
            
        }:nth-child(10){
            
        }
    }

   ` 
   export const ItKompaniya = styled.div`
       width:100%;
       display:flex;
       margin-top:150px;
       justify-content:center;
       flex-direction: column;
       h1{
           color:white;
           display:flex;
           justify-content:center;
           width:100%;
       }
       p {
           color:white;
           width:100%;
           display:flex;
           justify-content:center;
           text-align:center;
           font-size:18px;
           font-weight:400;
       }
      
   `
// export const Grid = styled(Grid)`
//      width:100%;
//     display:flex !important;
//     justify-content:center !important;
// `




export const Img123 = styled.img`
        height:336px;
        width:634px;
      /* @media screen and (max-width:735px) {
            border:1px solid red;
            
            width:700px;
        } */
`

// export const Oravoluvchi = styled.div`
    
// `