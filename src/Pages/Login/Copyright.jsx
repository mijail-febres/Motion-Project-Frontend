import React from "react";
import styled from "styled-components";
import twitterIcon from '../../Assets/svgs/twitter_icon.svg'
import facebookIcon from '../../Assets/svgs/facebook_icon.svg'
import instagramIcon from '../../Assets/svgs/instagram_icon.svg'

const CContainer = styled.div `
    width: 20%;
    height: 20%;
    border:1px dotted black;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

    div {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: blue;

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
            background-color: rgba(255,255,255,0);
        }

    }
    #Copyright {
        display: flex;
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
    return (
        <CContainer>
            <div>
                <button className='Button' id='twitter'></button>
                <button className='Button' id='facebook'></button>
                <button className='Button' id='instagram'></button>
            </div>
            <div id = 'Copyright'>
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/>
                <span>{label}</span>
            </div>
        </CContainer>
    )
}

export default CopyrightContainer;
