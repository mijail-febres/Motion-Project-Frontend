import React from 'react'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import { RepostDiv, RepostPostWrapper } from './RepostPostStyles'
import ImagePost from '../ImagePost/ImagePost'


function RepostPost() {
    return (
        <PostWrapper>
            <PostHeader type='shared' />

        <PostContentWrapper>
            <RepostPostWrapper>
                <p>This is the text before a repost</p>
                <RepostDiv>
                    <ImagePost type='isShared' />
                </RepostDiv>
        </RepostPostWrapper>

        </PostContentWrapper>

            <PostFooter />
        </PostWrapper>
    )
}

export default RepostPost
