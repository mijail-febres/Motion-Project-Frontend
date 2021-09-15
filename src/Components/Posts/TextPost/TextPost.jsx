import React from 'react'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { TextPostBody } from './TextPostStyles'

function TextPost() {
    return (
        <PostWrapper>
                <PostHeader />
            <PostContentWrapper >
                <TextPostBody >
                    <p>(THIS IS WHERE THE TEXT POST SHOULD GO. THIS WILL BE TAKEN FROM THE API, ADD FONT HERE TOO)</p>
                </TextPostBody>
            </PostContentWrapper>
                <PostFooter />
        </PostWrapper>
    )
}

export default TextPost
