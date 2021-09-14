import React, { useState } from "react";
import styled from "styled-components";
import profileIcon from '../../Assets/images/users/jennifer.png'
import menuIcon from '../../Assets/svgs/menu.svg'
import likeIcon from '../../Assets/svgs/heart.svg'
import shareIcon from '../../Assets/svgs/share.svg'
import picturePost from '../../Assets/images/feedPics/image1.png'
import profileUser1 from '../../Assets/images/users/alber.png'
import profileUser2 from '../../Assets/images/users/leticia.png'
import profileUser3 from '../../Assets/images/users/patricia.png'

const PostDetailsContainer = styled.div `
    * {
        margin : 0;
        padding: 0;
        border: none;
        box-sizing: content-box;
    }

    display: flex;
    width: 800px;
    height:500px ;

    #panelLeft {
        width : 60%;
        height: 100%;

        #pictureLeft {
            width: 100%;
            height: 100%;
        }
    }

    #panelRight {
        width : 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        #header {
            width: 100%;
            height: 20%;
            display: grid;
            grid-template-columns: 20%  70% 10%;
            grid-template-rows: 25% 25% 50%;
            grid-template-areas: 'profile name menu'
                                'profile time menu'
                                'comment comment comment';

            #profileContainer {
                grid-area: profile;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                #profile {
                    background-image: url(${profileIcon});
                }
            }

            #nameContainer {
                width: 100%;
                height: 100%;
                display: flex;
                grid-area: name;
                #name {
                    width: 100%;
                    height: 100%;
                }
            }
            #timeContainer {
                width: 100%;
                height: 100%;
                grid-area: time;
                display: flex;
                #time {
                    width: 100%;
                    height: 100%;
                }
            }
            #menuContainer {
                grid-area: menu;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                #menu {
                    width:  25px;
                    height: 25px;
                    background-image: url(${menuIcon});
                }

            }
            #commentContainer {
                grid-area: comment;
                width: 100%;
                height: 100%;
                display: flex;
                #textArea {
                    width: 100%;
                    height: 100%;
                    resize: none;
                    font-size: 15px;
                }
            }
        }

        #body {
            width: 100%;
            height: 60%;
        }

        #footer {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            #profileLike {
                width: 100%;
                height: 40%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                #avatarLike {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    .OtherUsers{
                        width: 35px;
                        height: 35px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        .OtherAvatar{
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            background-color: white;
                            background-repeat: no-repeat;
                            background-position-x: center;
                            background-position-y: center;
                            background-size: contain;
                            :hover{
                                cursor: pointer;
                            }
                        }
                    }
                }
                #countLike {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
            }

            #buttonsLikeShare {
                width: 100%;
                height: 60%;
                display: flex;
                justify-content: flex-start;
                border-top: 1px solid gray;

                .ButtonBottom {
                    height: 100%;
                    width: 20%;
                    background-color: white;
                    display: flex;
                    justify-content:space-between;
                    align-items: center;
                    padding: 0px 20px;
                    :hover{
                        cursor: pointer;
                    }
                }
            }
        }

    }
    .ProfileButtons {
        width:  40px;
        height: 40px;
        border: none;
        border-radius: 15px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: contain;
        margin: 0px 5px;
        background-color: white;
        :hover {
            cursor: pointer;
        }
    }
`

const PostDetails = () =>{
    const otherUsers = [profileUser1, profileUser2, profileUser3];// This is only an example, this should come from the user status

    const handleLike = () => {

    }

    const handleShare = () => {

    }
    return (
        <PostDetailsContainer>
            <div id = 'panelLeft'>
                <img id = 'pictureLeft' src = {picturePost} alt='posted'/>
            </div>
            <div id = 'panelRight'>
                <div id = 'header' >
                    <div id = 'profileContainer'>
                        <button id='profile' className='ProfileButtons'></button>
                    </div> 
                    <div id = 'nameContainer'>
                        <span id='name'>Jennifer Smith</span>
                    </div> 
                    <div id = 'timeContainer'>
                        <span id='time'>Just Now</span>
                    </div> 
                    <div id = 'commentContainer'>
                        <textarea id='textArea' rows='3' placeholder={'What\'s on your Mind, Jeniffer?'}></textarea>
                    </div> 
                    <div id = 'menuContainer'>
                        <button id='menu' className='ProfileButtons'></button>
                    </div> 
                </div>
                <div id='body'>

                </div>
                <div id='footer'>
                    <div id='profileLike'>
                        <div id = 'avatarLike'>
                            {
                                otherUsers.map((user, ind) => {
                                    let leftmargin = 0;
                                    return (
                                        <div key={ind} className='OtherUsers' style = {{left : `${leftmargin += ind*25}px`}}>
                                            <button className='OtherAvatar' style={{backgroundImage: `url(${user})`}}></button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div id = 'countLike'>
                            <span>{`${otherUsers.length} likes`}</span>
                        </div>
                    </div>
                    <div id='buttonsLikeShare'>
                        <button className="ButtonBottom" onClick={handleLike}>
                            <img className={'left'} src={likeIcon} alt='icon' />
                            Like
                        </button>
                        <button className="ButtonBottom" onClick={handleShare}>
                            <img className={'left'} src={shareIcon} alt='icon'/>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </PostDetailsContainer>
    )
}

export default PostDetails;