import React from 'react'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { TextPostBody } from './TextPostStyles'

function TextPost(props) {
    // console.log('~text post props', props)
    return (
        <PostWrapper type={props.type} onClick={(e) => props.closeDetails(e, props.id)}>
                <PostHeader firstName={props.user.first_name} lastName={props.user.last_name} time={props.time} />
            <PostContentWrapper >
                <TextPostBody >
                    <p>{props.content}</p>
                </TextPostBody>
            </PostContentWrapper>
                {props.type === 'isShared' ? null : <PostFooter likes={props.likes} />}
        </PostWrapper>
    )
}

export default TextPost
