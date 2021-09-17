import React from 'react'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import { GalleryPostWrapper, GalleryImageWrapper } from './GalleryPostStyles'

function GalleryPost(props) {
    return (
        <PostWrapper type={props.type} onClick={(e) => props.closeDetails(e, props.id)}>
            <PostHeader firstName={props.user.first_name} lastName={props.user.last_name} time={props.time} />

        <PostContentWrapper>
            <GalleryPostWrapper >
                <p>{props.content}</p>

                <GalleryImageWrapper >
                    <img src={props.images[0].image} alt="Post" />
                    <img src={props.images[1].image} alt="Post" />
                    {props.images[2] && <img src={props.images[2].image} alt="Post" />}
                    {/* the overlay for the 4th image should be made dynamically with the API */}
                    {props.images[3] && <img src={props.images[3].image} alt="Post" />}
                </GalleryImageWrapper>
                
            </GalleryPostWrapper>
        </PostContentWrapper>

            {props.type === 'isShared' ? null : <PostFooter likes={props.likes} />}
        </PostWrapper>
    )
}

export default GalleryPost
