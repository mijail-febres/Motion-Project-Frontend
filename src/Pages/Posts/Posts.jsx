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
import Header from '../../Components/Posts/Header/Header'
import PublishContainer from '../../Components/PublishSomething/PublishSomething'
import BackgroundContainer from "../Background/BackgroundStyle";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";




function Posts() {
    const [me, setMe] = useState({})
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState({show: false, id: null})
    const [showNew, setShowNew] = useState(false)
    const[motion,setMotion] = useState(false);
    const[postTab,setPostTab] = useState(true);
    const[findFriends,setBackground] = useState(false);
    const[people,setPeople] = useState([])
    const[token,setToken] = useState(null)

    const showNewClick = () => {
        setShowNew(!showNew)
    }

    const getUserInfo = async (accessToken) => {
        const url = 'https://motion.propulsion-home.ch/backend/api/users/me/'
        const headers = new Headers({'Authorization': `Bearer ${accessToken}`})
        const config = {headers,}
        const response = await fetch(url, config)
        const user = await response.json()
        console.log('~ UserInfo: ', user)
        setMe(user)

    }

    const login = async () => {
        const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/verify/'
        const localToken = localStorage.getItem('token')
        const body = {
            token: localToken
        }
        const headers = new Headers({'Content-Type': 'application/json'})
        const method = 'POST'
        const config = {
            method,
            headers,
            body: JSON.stringify(body)
        }
        const response = await fetch(url, config)
        console.log('~ Posts page, API token Response: ', response.status)
        if (response.status === 200) {
            setToken(localToken)
            getUserInfo(localToken)
            return getPosts(localToken)
        } else {

            // THIS IS WHERE WE CAN RE ROUTE TO THE LOGIN IF NEEDED

        }

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

    const getPeople = async () => {
        const url = 'https://motion.propulsion-home.ch/backend/api/users/?limit=30&offset=1';

        const method = 'GET'; // method

        const headers = new Headers({  // headers
            'Authorization': `Bearer ${token}`,
        });

        const config = { // configuration
            method : method,
            headers: headers,
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user

        // filters out profiles without icons
        //
        // const newData = data.results.filter(item => {
        //     if(item.avatar){
        //         return item;
        //     }
        // })
        const newData = data.results

        setPeople([...newData])
                console.log(people)
    }
    
    const handleGetPeople = () => {
        login();
        getPeople();
    }

    const handleSetMotion = () => {
        setMotion(true)
        setPostTab(false)
        setBackground(false)
    }

    const handleSetPosts =() => {
        setMotion(false)
        setPostTab(true)
        setBackground(false)
    }

    const handleSetFindFriends =() => {
        setMotion(false)
        setPostTab(false)
        setBackground(true)
    }

    return (
        <div style={{margin: '0'}}>
            <Header 
                handleSetMotion={handleSetMotion}
                handleSetPosts={handleSetPosts}
                handleSetFindFriends={handleSetFindFriends} 
                handleGetPeople={handleGetPeople} 
            />
            {showNew && <PublishContainer token={token} showNewClick={showNewClick} />}

            {postTab ?
            <MainPostsDiv>

                {postDetails.show && <PostDetails token={token} id={postDetails.id} showNewClick={showNewClick} closeDetails={postClickHandler}/>}


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

                    <NewPost showNewClick={showNewClick} user={me} />
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
            :null}
            {findFriends ?  // Find friends container
                <BackgroundContainer>
                    {Object.keys(people).length > 0 ?
                        people.map((user,ind)=> {
                            return (
                                <ProfileCard key={ind} user={user}/>
                            )

                        })
                    :
                        null
                    }
                </BackgroundContainer>
            :null}

        </div>
    )
}

export default Posts
