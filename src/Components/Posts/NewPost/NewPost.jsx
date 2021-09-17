import React, { useState } from 'react'
import Profile from '../../../Assets/images/users/blank-profile.png'
import SendIcon from '../../../Assets/svgs/send_button.svg'
import { PostWrapper } from '../../../Pages/Posts/PostsStyles'
import {NewPostWrapper, NewPostInput, NewPostButton, NewPostInputDiv, NewPostProfileImg, NewPostButtonWrapper} from './NewPostStyle'


function NewPost(props) {

    return (
        <PostWrapper onClick={props.showNewClick} >
            <NewPostWrapper>
                
            <NewPostProfileImg src={Profile} alt="Profile" /> {/* this should be taken from the API later */}

            <NewPostInputDiv >
                <NewPostInput type="text" placeholder={`What's on your mind, ${props.user.first_name}?`} readOnly={true} />  {/* this is Read only because it should create a popup on click */}
                <NewPostButtonWrapper>
                    <NewPostButton src={SendIcon} alt="Send Icon" />
                </NewPostButtonWrapper>
            </NewPostInputDiv>
            
            </NewPostWrapper>
        </PostWrapper>
    )
}

export default NewPost
