import React, { useEffect, useState } from 'react'
import GalleryPost from '../../Components/Posts/GalleryPost/GalleryPost'
import ImagePost from '../../Components/Posts/ImagePost/ImagePost'
import NewPost from '../../Components/Posts/NewPost/NewPost'
import RepostPost from '../../Components/Posts/RepostPost/RepostPost'
import TextPost from '../../Components/Posts/TextPost/TextPost'
import SearchIcon from '../../Assets/svgs/search_icon.svg'
import { MainPostsDiv, NavButtonWrapper, PostDisplayWrapper, PostsNavWrapper, SearchLabel } from './PostsStyles'
import Masonry from 'react-masonry-css'
import PostDetails from '../../Components/PostDetails/PostDetails'





function Posts() {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState({show: false, id: null})

    const login = async () => {
        const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/'
        const body = {
            email: 'patrickmzimmermann@gmail.com',
            password: 'test123',
        }
        const headers = new Headers({'Content-Type': 'application/json'})
        const method = 'POST'
        const config = {
            method,
            headers,
            body: JSON.stringify(body)
        }
        const response = await fetch(url, config)
        const json = await response.json()
        const accessToken = json.access
        return getPosts(accessToken)
    }
    
    const getPosts = async (accessToken) => {
        const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/?limit=15'
        const headers = new Headers({'Authorization': `Bearer ${accessToken}`})
        const config = {headers,}
        const response = await fetch(url, config)
        const json = await response.json()
        setPosts(json.results)
        return json.results
    }

    const postClickHandler = (e, id=null) => {
        setPostDetails({show: !postDetails.show, id: id})
    }

    useEffect(() => {
        login()
    }, [])

    return (
        <MainPostsDiv>

            {postDetails.show && <PostDetails id={postDetails.id} closeDetails={postClickHandler}/>}

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


            <PostDisplayWrapper  >

            <Masonry
            breakpointCols={2}
            className="Posts-masonry-grid"
            columnClassName="Posts-masonry-grid_column"
            >

                <NewPost />
                {posts.map((x) => {
                if (x.images.length === 1) {return <ImagePost closeDetails={postClickHandler} id={x.id} key={x.id} images={x.images} content={x.content} time={x.created} user={x.user} likes={x.amount_of_likes} />}
                else if (x.images.length > 1) {return <GalleryPost closeDetails={postClickHandler} id={x.id}  key={x.id} images={x.images} content={x.content} time={x.created} user={x.user} likes={x.amount_of_likes} />}
                else {return <TextPost closeDetails={postClickHandler} id={x.id}  key={x.id} content={x.content} time={x.created} user={x.user} likes={x.amount_of_likes} />}
                })}
                {/* <TextPost />
                <ImagePost />
                <GalleryPost />
                <RepostPost /> */}
            </Masonry>
            </PostDisplayWrapper>




        </MainPostsDiv>
    )
}

export default Posts
