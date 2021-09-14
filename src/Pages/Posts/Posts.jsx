import React from 'react'
import GalleryPost from '../../Components/Posts/GalleryPost/GalleryPost'
import ImagePost from '../../Components/Posts/ImagePost/ImagePost'
import NewPost from '../../Components/Posts/NewPost/NewPost'
import RepostPost from '../../Components/Posts/RepostPost/RepostPost'
import TextPost from '../../Components/Posts/TextPost/TextPost'

function Posts() {
    return (
        <div className='postsMainDiv'>

            <div className='PostsNavWrapper' >

                <div className='SearchWrapper' >
                    <input type="search" placeholder='Search Posts' />
                </div>

                <div className='navButtonWrapper' >
                    <button>Liked</button>
                    <button>Friends</button>
                    <button>Follow</button>
                </div>

            </div> 

            <hr />

            <div className='postsWrapper' >
                <NewPost />
                {/* <TextPost /> */}
                {/* <ImagePost /> */}
                <GalleryPost />
                {/* <RepostPost /> */}
            </div>




        </div>
    )
}

export default Posts
