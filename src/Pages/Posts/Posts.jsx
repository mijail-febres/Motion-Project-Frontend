import React from 'react'
import GalleryPost from '../../Components/Posts/GalleryPost/GalleryPost'
import ImagePost from '../../Components/Posts/ImagePost/ImagePost'
import NewPost from '../../Components/Posts/NewPost/NewPost'
import RepostPost from '../../Components/Posts/RepostPost/RepostPost'
import TextPost from '../../Components/Posts/TextPost/TextPost'
import SearchIcon from '../../Assets/svgs/search_icon.svg'
import { MainPostsDiv, NavButtonWrapper, PostDisplayWrapper, PostsNavWrapper, SearchLabel } from './PostsStyles'
import Masonry from 'react-masonry-css'

function Posts() {
    return (
        <MainPostsDiv>

            <PostsNavWrapper >

                <SearchLabel >
                    <img src={SearchIcon} alt="" />
                    <input type="search" placeholder='Search Posts...' />
                </SearchLabel>

                <NavButtonWrapper >
                    <button>Liked</button>
                    <button>Friends</button>
                    <button>Follow</button>
                </NavButtonWrapper>
            </PostsNavWrapper>


            <PostDisplayWrapper >

            <Masonry
            breakpointCols={2}
            className="Posts-masonry-grid"
            columnClassName="Posts-masonry-grid_column"
            >

                <NewPost />
                <TextPost />
                <ImagePost />
                <GalleryPost />
                <RepostPost />
            </Masonry>
            </PostDisplayWrapper>




        </MainPostsDiv>
    )
}

export default Posts
