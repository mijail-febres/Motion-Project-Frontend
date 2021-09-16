// Header for the after-login sections
import React, { useState } from "react";
import HeaderContainer from './HeaderStyle'
import FindFriendsIcon from '../../../Assets/svgs/icon-friends.svg'
import MotionIcon from '../../../Assets/images/logo.png'
import PostsIcon from '../../../Assets/images/posts_logo.png'

const MasterHeader = (props) => {

    const[motion,setMotion] = useState(false);
    const[posts,setPosts] = useState(false);
    const[findFriends,setFindFriends] = useState(false);

    const NumberOfNotifications = 3;

    const handleOnClickMotion = () => {
        setMotion(true)
        setPosts(false)
        setFindFriends(false)
    }
    const handleOnClickPosts = () => {
        setMotion(false)
        setPosts(true)
        setFindFriends(false)
    }
    const handleOnClickFindFriends = () => {
        setMotion(false)
        setPosts(false)
        setFindFriends(true)
        props.handleGetPeople();
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
                <div onClick={handleOnClickMotion} className = 'DivButtons' id='Motion' 
                    style = {motion ? {borderBottom : '2px solid blue'}:{border : 'none'}}>
                    <button className='ButtonTop' id='ButtonMotion'></button>
                    <label>Motion</label>
                </div>
                <div onClick={handleOnClickPosts} className = 'DivButtons' id='Posts' 
                    style = {posts ? {borderBottom : '2px solid blue'}:{border : 'none'}}>
                    <button className='ButtonTop' id='ButtonPosts'></button>
                    <label>Posts</label>
                </div>
                <div onClick ={handleOnClickFindFriends} className = 'DivButtons' id='FindFriends'
                    style = {findFriends ? {borderBottom : '2px solid blue'}:{border :'none'}}>
                    <button className='ButtonTop' id='ButtonFindFriends'></button>
                    <label>Find Friends</label>
                </div>
            </div>
            <div id='right'>
                <button onClick={handleOnClickNotification} className='ButtonBottom' id='ButtonNotification'></button>
                <div id='containsNumber'>
                    <button
                        id='ButtonNumberNotification'
                        onClick={handleOnClickNumberNotifications}
                        style ={{backgroundColor : NumberOfNotifications > 0 ? 'red' : 'white'}} // Here it will show notifications 
                    >
                        {NumberOfNotifications}
                    </button>
                </div>

                <button onClick={handleOnClickProfile} className='ButtonBottom' id='ButtonProfile'></button>
                <button onClick={handleOnClickMenu} className='ButtonBottom' id='ButtonMenu'></button>
            </div>
        </HeaderContainer>
    )
}

export default MasterHeader;