import React from 'react'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import PlaceholderImage from '../../../Assets/images/feedPics/large_image.png'
import { ImagePostWrapper } from './ImagePostStyle'

function ImagePost() {
    return (
        <PostWrapper>
                <PostHeader />

            <PostContentWrapper>
                <ImagePostWrapper >
                    <p>(THIS IS WHERE THE TEXT PART OF THE POST SHOULD GO. THIS WILL BE TAKEN FROM THE API)</p>
                    <img src={PlaceholderImage} alt="Post" />
                </ImagePostWrapper>
            </PostContentWrapper>

                <PostFooter />
        </PostWrapper>
    )
}

export default ImagePost
