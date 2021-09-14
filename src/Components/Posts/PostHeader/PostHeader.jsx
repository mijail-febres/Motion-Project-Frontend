import React from 'react'
import Profile from '../../../Assets/images/users/jennifer.png'
import { PostHeaderWrapper, HeaderProfileIcon, HeaderName, PostTimestamp, SharedPost, HeaderMenuButton } from './PostHeaderStyle'

function PostHeader() {

    const onMenuClick = () => {
        console.log('MENU CLICK')
    }

    return (
        <PostHeaderWrapper>
            <HeaderProfileIcon src={Profile} alt="Profile" /> {/* this should be taken from the API later */}
            <HeaderName>(POSTERS NAME HERE)</HeaderName>
            <PostTimestamp>(POST TIMESTAMP)</PostTimestamp>
            <SharedPost>shared a post (only display on "repost")</SharedPost>
            <HeaderMenuButton onClick={onMenuClick} ></HeaderMenuButton>
        </PostHeaderWrapper>
    )
}

export default PostHeader
