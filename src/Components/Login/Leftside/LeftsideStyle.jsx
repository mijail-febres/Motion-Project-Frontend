// import React from 'react';
import styled from 'styled-components';
// import MotionLogo from '../../Assets/images/logo_white.png';
// import AppStoreLogo from '../Assets/svgs/apple.svg';
// import GoogleStoreLogo from '../../Assets/svgs/google.svg';
import MainBackground from '../../../Assets/images/background_image.png';
import CopyrightContainer from '../Copyright/Copyright';

// export const Title = styled.h1`
//     font-size: 30px;
//     color: red;
// `

export const PageLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    height: 100%;
    width: 40vw;
    background-image: url(${MainBackground}), linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    /* background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%); */
    /* box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07); */
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.9; */
`

export const PageContainerTop = styled.div`
    /* border: solid blue; */
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export const IconMotion = styled.div`
    /* border: rgba(211, 211, 211, 0.507) 2px solid;
    border-radius: 30px;
    height: 35px;
    width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;         
    margin-top: 5%;
    margin-right: 3%; */
`

export const Para1 = styled.p`
    margin-top: 3%;
    /* color: black; */
    color: white;
    font-size: 30px; 
    font-style: normal;
`
export const Para2 = styled.p`
    display: flex;
    align-content: stretch;
    margin-top: 5%;
    color:lightgray;
`
export const Para3 = styled.p`
    margin-top: 1%;
    color:lightgray;
`

export const PageContainerMiddle = styled.div`
    /* border: solid black 3px; */
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const IconBorder1 = styled.div`
    border: rgba(211, 211, 211, 0.507) 2px solid;
    border-radius: 30px;
    height: 35px;
    width: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;         
    margin-top: 5%;
    margin-right: 3%;
`

// function LandingLeftCenter() {
//     return (
//         <div>
//                 <Title>Landing Left Center</Title>

//                 <PageLeftContainer>
//                     <PageContainerTop>
//                         <IconMotion>
//                         <img src={ MotionLogo } alt="Motionlogo" />
//                         </IconMotion>
//                         <Para1>Motion</Para1>
//                         <Para2>Connect with friends and the world</Para2>
//                             <Para3>around you with Motion</Para3>
//                     </PageContainerTop>
                    
//                     <PageContainerMiddle>
//                         <IconBorder1>
//                             <img src={AppStoreLogo} alt="Appstorelogo" />
//                         </IconBorder1>

//                         <IconBorder1>
//                             <img src={ GoogleStoreLogo } alt="Googleappstorelogo" />
//                         </IconBorder1>
//                     </PageContainerMiddle>
//                 </PageLeftContainer>
//         </div>
//     )
// }

// export default LandingLeftCenter

