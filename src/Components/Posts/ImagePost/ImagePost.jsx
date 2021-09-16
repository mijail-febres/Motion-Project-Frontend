import React from 'react'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import PlaceholderImage from '../../../Assets/images/feedPics/large_image.png'
import { ImagePostWrapper } from './ImagePostStyle'

function ImagePost(props) {

    return (
        <PostWrapper type={props.type} onClick={(e) => props.closeDetails(e, props.id)} >
                <PostHeader firstName={props.user.first_name} lastName={props.user.last_name} time={props.time} />

            <PostContentWrapper>
                <ImagePostWrapper >
                    <p>{props.content}</p>
                    <img src={props.images[0].image} alt="Post" />
                </ImagePostWrapper>
            </PostContentWrapper>

                {props.type === 'isShared' ? null : <PostFooter likes={props.likes} />}
        </PostWrapper>
    )
}

export default ImagePost
