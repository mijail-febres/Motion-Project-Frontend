import React from "react";
import styled from "styled-components";
import MotionIcon from '../../Assets/images/logo.png'
import PostsIcon from '../../Assets/images/posts_logo.png'
import FindFriendsIcon from '../../Assets/svgs/icon-friends.svg'

import NotificationIcon from '../../Assets/svgs/notification_bell.svg'
import ProfileIcon from '../../Assets/images/users/jennifer.png'
import MenuIcon from '../../Assets/svgs/menu.svg'

const HeaderContainer = styled.div `
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .DivButtons {
            height: 100%;
            width: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .ButtonTop {
                width: 30px;
                height: 30px;
                background-color: white;
                border: none;
                background-repeat: no-repeat;
                background-position-x: center;
                background-position-y: center;
                background-size: contain;
            }

        }
    }

    #right {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;

        .ButtonBottom {
            width: 30px;
            height: 30px;
            background-color: white;
            border: none;
            background-repeat: no-repeat;
            background-position-x: center;
            background-position-y: center;
            background-size: contain;
        }
    }

    #ButtonMotion {
        background-image: url(${MotionIcon});
    }
    #ButtonPosts {
        background-image: url(${PostsIcon});
    }
    #ButtonFindFriends {
        background-image: url(${FindFriendsIcon});
    }

    #ButtonNotification {
        background-image: url(${NotificationIcon});
    }
    #ButtonNumberNotification{
        width : 20px;
        height: 20px;
        border : none;
        padding: 0;
        border-radius: 50px;
        color: white;
    }
    #ButtonProfile {
        background-image: url(${ProfileIcon});
    }
    #ButtonMenu {
        background-image: url(${MenuIcon});
    }
`
const MasterHeader = ({NumberOfNotifications}) => {

    const handleOnClickMotion = () => {

    }
    const handleOnClickPosts = () => {

    }
    const handleOnClickFindFriends = () => {

    }
    const handleOnClickNotification = () => {

    }
    const handleOnClickNumberNotifications = () => {

    }
    const handleOnClickProfile = () => {

    }
    const handleOnClickMenu = () => {

    }

    return (
        <HeaderContainer>
            <div id='left'>
                <div className = 'DivButtons' id='Motion' >
                    <button onClick={handleOnClickMotion}className='ButtonTop' id='ButtonMotion'></button>
                    <label>Motion</label>
                </div>
                <div className = 'DivButtons' id='Posts' >
                    <button onClick={handleOnClickPosts}className='ButtonTop' id='ButtonPosts'></button>
                    <label>Posts</label>
                </div>
                <div className = 'DivButtons' id='FindFriends'>
                    <button onClick ={handleOnClickFindFriends} className='ButtonTop' id='ButtonFindFriends'></button>
                    <label>Find Friends</label>
                </div>
            </div>
            <div id='right'>
                <button onClick={handleOnClickNotification} className='ButtonBottom' id='ButtonNotification'></button>
                <button
                    id='ButtonNumberNotification'
                    onClick={handleOnClickNumberNotifications}
                    style ={{backgroundColor : NumberOfNotifications > 0 ? 'red' : 'white'}} // Here it will show notifications 
                >
                    {NumberOfNotifications}
                </button>

                <button onClick={handleOnClickProfile} className='ButtonBottom' id='ButtonProfile'></button>
                <button onClick={handleOnClickMenu} className='ButtonBottom' id='ButtonMenu'></button>
            </div>
        </HeaderContainer>
    )
}

export default MasterHeader;