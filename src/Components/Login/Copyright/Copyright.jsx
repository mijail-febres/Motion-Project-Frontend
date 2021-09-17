import React from "react";
import styled from "styled-components";
import twitterIcon from '../../../Assets/svgs/twitter_icon.svg'
import facebookIcon from '../../../Assets/svgs/facebook_icon.svg'
import instagramIcon from '../../../Assets/svgs/instagram_icon.svg'

const CContainer = styled.div `
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    padding-top: 15%;
    

    div {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content:center;
        align-items: center;

        .Button {
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 25px;
            margin: 10px;
            background-repeat: no-repeat;
            background-position-x: center;
            background-position-y: center;
            background-size: contain;
            background-color: rgba(240,240,240,0);
            :hover {
                cursor: pointer;
            }
        }

    }
    #Copyright {
        display: flex;
    }

    div span {
        color: rgb(240, 240, 240);
    }

    #twitter {
        background-image: url(${twitterIcon});
    }
    
    #facebook {
        background-image: url(${facebookIcon});
    }

    #instagram {
        background-image: url(${instagramIcon});
    }
`
const CopyrightContainer = ({label}) => {
    const redirectInstagram = () =>{
        window.open('https://instagram.com/', '_blank');
    }
    const redirectFacebook = () =>{
        window.open('https://www.facebook.com/', '_blank');
    }
    const redirectTwitter = () =>{
        window.open('https://twitter.com/', '_blank');
    }
    return (
        <CContainer>
            <div>
                <button className='Button' id='twitter' onClick = {redirectTwitter}></button>
                <button className='Button' id='facebook' onClick = {redirectFacebook}></button>
                <button className='Button' id='instagram' onClick = {redirectInstagram}></button>
            </div>
            <div id = 'Copyright'>
                <span dangerouslySetInnerHTML={{ "__html": "&copy; Motion 2021. All rights reserved" }}/>
                <span>{label}</span>
            </div>
        </CContainer>
    )
}

export default CopyrightContainer;
