import React from 'react'
import Profile from '../../../Assets/images/users/blank-profile.png'
import { PostHeaderWrapper, HeaderProfileIcon, HeaderName, PostTimestamp, SharedPost, HeaderMenuButton } from './PostHeaderStyle'

function PostHeader (props) {

    const onMenuClick = () => {
        console.log('MENU CLICK')
    }

    return (
        <PostHeaderWrapper>
            <HeaderProfileIcon src={Profile} alt="Profile" /> {/* this should be taken from the API later */}
            <HeaderName>{props.firstName} {props.lastName}</HeaderName>
            <PostTimestamp>{props.time && props.time.substring(0, 10)}</PostTimestamp>
            {props.type === 'shared' && <SharedPost>shared a post</SharedPost> } {/* this only displays on shared posts */}
            <HeaderMenuButton onClick={onMenuClick} ></HeaderMenuButton>
        </PostHeaderWrapper>
    )
}

export default PostHeader
