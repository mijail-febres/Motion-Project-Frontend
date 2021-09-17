import profileIcon from '../../Assets/images/users/jennifer.png' // this photo should come from API
import MainProfileCardContainer from './MainProfileCardContainer';
import { useEffect, useState } from 'react';
import defaultAvatar from '../../Assets/svgs/default_avatar.svg'

const MainProfileCard = (props) => {

    const[user,setUser] = useState('mijail.febres@gmail.com')
    const[pass,setPass] = useState('algunpassword')
    const[token,setToken] = useState(null)
    const[profile,setProfile] = useState(null)

    let ownProfile =true; // this means that the profile will show its own account (you are not supposed to add/follow yourself)

    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // get the token form localStorage
        if (token) {
            setToken(token);
            getProfile(token)
        } else {
            setToken(props.token)
            getProfile(props.token)
        }
    }, []);

    const login = async () => {
        if (!token) {
            const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';

            const method = 'POST'; // method

            const headers = new Headers({  // headers
                'Content-type': 'application/json'
            });

            const body = {  // body
                'email': user,
                'password': pass,
            }

            const config = { // configuration
                method : method,
                headers: headers,
                body : JSON.stringify(body)
            }

            const response = await fetch(url, config);  //fething
            const data     = await response.json();  // getting the user
            localStorage.setItem('auth-token', data.access); // store token
            setToken(data.acces)
        }

    }

    const getProfile = async (token) => {
        const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';

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
        
        setProfile(data)
    }

    const handleEditProfile = () => {

    };

    const handleAddFriend = () => {

    };

    const handleFollow = () => {

    };

    const handleOnClickDivs = (ind) => { // if the statistics get some action.

    }

    return (

        <MainProfileCardContainer>
            <div id='profile'>
                <button id='profileIcon' style={{backgroundImage : `url(${profile ? defaultAvatar:null})`}}></button>
                {/* <img id='profileIcon' src={profile ? defaultAvatar:null}/> */}
                <span id='name'>{profile?profile.username:'Someone'}</span>
                <span id='location'>{profile?profile.location:'somewhere'}</span>
                {ownProfile ? // When it is your own account
                    <div className='ProfileButtons' id='editButton'>
                        <button onClick={handleEditProfile} className = 'Buttons' id='editProfile'>EDIT PROFILE</button>
                    </div>
                : // when it's someone else's account
                    <div className='ProfileButtons' id='followButtons'>
                        <button onClick={handleFollow} className = 'Buttons' id='follow'>FOLLOW</button>
                        <button onClick={handleAddFriend} className = 'Buttons' id='addFriend'>ADD FRIEND</button>
                    </div>
                }
            </div>
            <div id='about'>
                <div id = 'aboutCentered'>
                    <span id='About'>About</span>
                    <textarea id='textArea' readOnly value={profile ? profile.about_me: 'loading...'}></textarea>
                </div>
                <div id = 'div-email'>
                    <span id='emailTag'>Email</span>
                    <span id='email' >{profile ? profile.email : null}</span>
                </div>
            </div>
            <div id='thingsILike'>
                <div id='tags'>
                    {profile?
                        profile.things_user_likes.map((keyInf,ind) => {
                            return (
                                <button key={ind} className='tagButtons'> {keyInf} </button>
                            )
                        })
                    :null
                    }
                </div>
            </div>
            <div id='statistics'>
                {profile?
                    <>
                    <div  className='Div-statistics' >
                        <span>{'Posts'}</span>
                        <span>{profile.amount_of_posts}</span>
                    </div>
                    <div  className='Div-statistics'>
                        <span>{'Likes'}</span>
                        <span>{profile.amount_of_likes}</span>
                    </div>
                    <div  className='Div-statistics'>
                        <span>{'Friends'}</span>
                        <span>{profile.amount_of_friends}</span>
                    </div>
                    <div  className='Div-statistics'>
                        <span>{'Followers'}</span>
                        <span>{profile.amount_of_followers}</span>
                    </div>
                    <div  className='Div-statistics'>
                        <span>{'Following'}</span>
                        <span>{profile.amount_following}</span>
                    </div>
                    </>
                :null}
                
            </div>
        </MainProfileCardContainer>
    );
}

export default MainProfileCard