import React from 'react'
import PostFooter from '../PostFooter/PostFooter'
import PostHeader from '../PostHeader/PostHeader'
import { PostWrapper, PostContentWrapper } from '../../../Pages/Posts/PostsStyles'
import PHI1 from '../../../Assets/images/feedPics/image1.png'
import PHI2 from '../../../Assets/images/feedPics/image2.png'
import PHI3 from '../../../Assets/images/feedPics/image3.png'
import PHI4 from '../../../Assets/images/feedPics/image4.png'
import { GalleryPostWrapper, GalleryImageWrapper } from './GalleryPostStyles'

function GalleryPost() {
    return (
        <PostWrapper>
            <PostHeader />

        <PostContentWrapper>
            <GalleryPostWrapper >
                <p>(THIS IS WHERE THE TEXT POST SHOULD GO. THIS WILL BE TAKEN FROM THE API)</p>

                <GalleryImageWrapper >
                    <img src={PHI1} alt="Post" />
                    <img src={PHI2} alt="Post" />
                    <img src={PHI3} alt="Post" />
                    {/* the overlay for the 4th image should be made dynamically with the API */}
                    <img src={PHI4} alt="Post" />
                </GalleryImageWrapper>
                
            </GalleryPostWrapper>
        </PostContentWrapper>

            <PostFooter />
        </PostWrapper>
    )
}

export default GalleryPost
