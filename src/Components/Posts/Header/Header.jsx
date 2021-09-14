// Header for the after-login sections

import React from "react";
import HeaderContainer from './HeaderStyle'


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