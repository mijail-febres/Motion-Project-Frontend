import React from 'react'
import LikeIcon from '../../../Assets/svgs/heart.svg'
import ShareIcon from '../../../Assets/svgs/share.svg'
import { LikeCounter, PostFooterWrapper, FooterButton, FooterLabel } from './PostFooterStyles'


function PostFooter() {

    const onLike = () => {
        console.log('LIKED POST')
    }

    const onShare = () => {
        console.log('SHARE POST')
    }

    return (
        <PostFooterWrapper >
            <FooterLabel>
                <FooterButton onClick={onLike} ><img src={LikeIcon} alt="" /></FooterButton>
                <span>Like</span>
            </FooterLabel>
            <FooterLabel >
                <FooterButton onClick={onShare} ><img src={ShareIcon} alt="" /></FooterButton>
                <span>Share</span>
            </FooterLabel>

            <LikeCounter >(NR OF LIKES) likes</LikeCounter>
        </PostFooterWrapper>
    )
}

export default PostFooter
