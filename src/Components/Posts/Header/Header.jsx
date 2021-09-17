// Header for the after-login sections
import React, { useState } from "react";
import HeaderContainer from './HeaderStyle'
import editIcon from '../../../Assets/svgs/edit_icon.svg'
import logoutIcon from '../../../Assets/svgs/logout_icon.svg'
import defaultAvatar from '../../../Assets/svgs/default_avatar.svg'
import { logout} from '../../../Store/Actions/logoutAction';
import { useEffect } from "react";

const MasterHeader = (props) => {

    const[motion,setMotion] = useState(false);
    const[posts,setPosts] = useState(true);
    const[findFriends,setFindFriends] = useState(false);
    const[menu,setMenu] = useState(false);
    const[token,setToken] = useState(null);
    const[profile,setProfile] = useState(null);

    const NumberOfNotifications = 3;

    const handleOnClickMotion = () => {
        setMotion(true)
        setPosts(false)
        setFindFriends(false)
        if (props.handleSetMotion) {
            props.handleSetMotion();
        }
    }
    const handleOnClickPosts = () => {
        setMotion(false)
        setPosts(true)
        setFindFriends(false)
        if (props.handleSetPosts) {
            props.handleSetPosts();
        }
    }
    const handleOnClickFindFriends = () => {
        setMotion(false)
        setPosts(false)
        setFindFriends(true)
        if (props.handleSetFindFriends && props.handleSetFindFriends) {
            props.handleGetPeople();
            props.handleSetFindFriends();
        }
    }
    const handleOnClickNotification = () => {

    }
    const handleOnClickNumberNotifications = () => {

    }
    const handleOnClickProfile = () => {

    }
    const handleOnClickMenu = () => {
        setMenu(!menu);
    }

    const handleProfile = () => {
        props.handleShowProfile();
        setMenu(!menu);
    }

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // get the token form localStorage
        if (token) {
            setToken(token);
            getProfile(token)
        } else {
            setToken(props.token)
            getProfile(props.token)
        }
    }, []);

    const getProfile = async (token) => {
        const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';

        const method = 'GET'; // method

        const headers = new Headers({  // headers
            'Authorization': `Bearer ${token}`,
        });

        const config = { // configuration
            method : method,
            headers: headers,
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user
        
        setProfile(data)
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

                <button onClick={handleOnClickProfile} 
                        className='ButtonBottom' 
                        id='ButtonProfile'
                        style = {{backgroundImage : `url(${profile ? defaultAvatar : null})`}}
                        ></button>
                <button onClick={handleOnClickMenu} className='ButtonBottom' id='ButtonMenu'></button>
                {menu? // popup menu is or is not shown
                    <div id = 'popup-menu'>
                        <button className = 'ButtonMenu' id='edit' onClick={handleProfile}>
                            <img className='MenuImg' src={editIcon} alt='icon' />
                            Profile
                        </button>
                        <button className = 'ButtonMenu' id='delete' onClick={handleLogout}>
                            <img className='MenuImg' src={logoutIcon} alt='icon'/>
                            Logout
                        </button>
                    </div>
                :null}
            </div>
        </HeaderContainer>
    )
}

export default MasterHeader;