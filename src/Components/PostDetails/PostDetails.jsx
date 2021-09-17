import { useEffect, useState } from "react";
import likeIcon from '../../Assets/svgs/heart.svg'
import shareIcon from '../../Assets/svgs/share.svg'
import picturePost from '../../Assets/images/feedPics/image1.png' // This should come from the post information (possible an object)
import profileUser1 from '../../Assets/images/users/alber.png'     // This should come from the post information
import profileUser2 from '../../Assets/images/users/leticia.png'   // This should come from the post information
import profileUser3 from '../../Assets/images/users/patricia.png'  // This should come from the post information
import editIcon from '../../Assets/svgs/edit_icon.svg'
import deleteIcon from '../../Assets/svgs/trash_can_icon.svg'
import {PostDetailsBlackout, PostDetailsContainer} from './PostDetailStyle'
import EditContainer from '../PublishSomething/PublishSomething'



const PostDetails = (props) =>{
    const [postDetails, setPostDetails] = useState({})
    const [showEdit, setEdition] = useState(false);

    let images = []
    if (postDetails.images) {images = postDetails.images}
    console.log('~ images', images)
    const [token, settoken] = useState('')

    // const login = async () => {
    //     const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/'
    //     const body = {
    //         email: 'patrickmzimmermann@gmail.com',
    //         password: 'test123',
    //     }
    //     const headers = new Headers({'Content-Type': 'application/json'})
    //     const method = 'POST'
    //     const config = {
    //         method,
    //         headers,
    //         body: JSON.stringify(body)
    //     }
    //     const response = await fetch(url, config)
    //     const json = await response.json()
    //     const accessToken = json.access
    //     settoken(accessToken)
    //     return getPostDetails(accessToken)
    // }

    const getPostDetails = async (accessToken) => {
        const url = `https://motion.propulsion-home.ch/backend/api/social/posts/${props.id}`
        const headers = new Headers({'Authorization': `Bearer ${accessToken}`})
        const config = {headers,}
        const response = await fetch(url, config)
        const json = await response.json()
        console.log('~ json POST DETAILS', json)
        setPostDetails(json)
    }

    useEffect(()=> {
        getPostDetails(props.token)
    }, [])


    const [isMenuShown, menuShow] = useState(false);

    const otherUsers = [profileUser1, profileUser2, profileUser3];// This is only an example, this should come from the user status

    const handleLike = () => {

    }

    const handleShare = () => {

    }

    const handleMenu = () => { // show or hide popup menu
        menuShow(!isMenuShown);
    }

    const handleDelete = async () => { 
        console.log('delete post', props.id)
        const url = `https://motion.propulsion-home.ch/backend/api/social/posts/${props.id}`
        const headers = new Headers({'Authorization': `Bearer ${token}`})
        const method = 'DELETE'
        const config = {method, headers,}
        const response = await fetch(url, config)
        console.log('~ response ON POST DELETE', response)

        window.location.reload()
    }

    const handleEdit = () => { // should open the form for publishing something (PublishSomething.jsx)
        //Not implemente yet
        setEdition(!showEdit)

        menuShow(!isMenuShown);
    }

    return (
        <div>
            <PostDetailsContainer>
                <div id = 'panelLeft'>
                    {images.length > 0 ? <img id = 'pictureLeft' src = {postDetails.images[0].image} alt='posted'/> : <p>Loading...</p>}
                    
                </div>
                <div id = 'panelRight'>
                    <div id = 'header' >
                        <div id = 'profileContainer'>
                            <button id='profile' className='ProfileButtons'></button>
                        </div> 
                        <div id = 'nameContainer'>
                            <span id='name'>{postDetails.user && postDetails.user.first_name + ' ' + postDetails.user.last_name}</span>
                        </div> 
                        <div id = 'timeContainer'>
                            {postDetails.created && <span id='time'>{postDetails.created.substring(0, 10)}</span>}
                        </div> 
                        <div id = 'commentContainer'>
                            <p id='textArea' >{postDetails.content && postDetails.content }</p>
                        </div> 
                        <div id = 'menuContainer' >
                            <button id='menu' className='ProfileButtons' onClick = {handleMenu}></button>
                        </div>
                        { isMenuShown? // popup menu is or is not shown
                            <div id = 'popup-menu'>
                                <button className = 'ButtonMenu' id='edit' onClick={() => handleEdit()}>
                                    <img className='MenuImg' src={editIcon} alt='icon' />
                                    Edit
                                </button>
                                <button className = 'ButtonMenu' id='delete' onClick={handleDelete}>
                                    <img className='MenuImg' src={deleteIcon} alt='icon'/>
                                    Delete
                                </button>
                            </div>
                        :null}
                    </div>
                    <div id='body'>
    
                    </div>
                    <div id='footer'>
                        <div id='profileLike'>
                            <div id = 'avatarLike'>
                                {
                                    otherUsers.map((user, ind) => {
                                        let leftmargin = 0;
                                        return (
                                            <div key={ind} className='OtherUsers' style = {{left : `${leftmargin += ind*25}px`}}>
                                                <button className='OtherAvatar' style={{backgroundImage: `url(${user})`}}></button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div id = 'countLike'>
                                <span>{`${otherUsers.length} likes`}</span>
                            </div>
                        </div>
                        <div id='buttonsLikeShare'>
                            <button className="ButtonBottom" onClick={handleLike}>
                                <img className={'left'} src={likeIcon} alt='icon' />
                                Like
                            </button>
                            <button className="ButtonBottom" onClick={handleShare}>
                                <img className={'left'} src={shareIcon} alt='icon'/>
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </PostDetailsContainer>
            <PostDetailsBlackout onClick={() => props.closeDetails() } zlevel ={'9'}/>
            {showEdit?
                <>
                <EditContainer id = {props.id} token={props.token}/>
                <PostDetailsBlackout onClick={() => props.closeDetails() } zlevel ={'9'}/>
                </>
            :null} 
        </div>
    )
}

export default PostDetails;