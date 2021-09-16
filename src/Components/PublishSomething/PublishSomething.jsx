import styled from "styled-components";
import sendButton from '../../Assets/svgs/send_button.svg';
import linkIcon from '../../Assets/svgs/link_icon.svg';
import pictureIcon from '../../Assets/svgs/upload_picture.svg';
import profileIcon from '../../Assets/images/users/jennifer.png'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateToken, getUserInfo } from '../actions';

const PContainer = styled.div `
    * {
        border: none;
        padding: 0;
        margin : 0;
        box-sizing: content-box;
    }
    width: 30%;
    border:1px dotted black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #header {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        #profileContainer {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;

            #profile {
                width: 30px;
                height: 30px;
                border-radius: 15px;
                background-image: url(${profileIcon});
            }
        }
        #thoughts {
            width: 80%;
            #textArea {
                width: 100%;
                height: 100%;
                max-height: 100%;
                resize: none;
            }
        }
    }

    #footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #publish {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-image: url(${sendButton});
        background-size: 60%;
    }

    .uploadButtons {
        width:  15px;
        height: 15px;
        border: none;
        border-radius: 5px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: 100%;
        margin: 0px 5px;
        :hover {
            cursor: pointer;
        }
    }
    #uploadPicture {
        background-image: url(${pictureIcon});
    }

    #uploadLink {
        background-image: url(${linkIcon});
    }

    .Sub-thumbnails-container {
        width: 100%;
        height: 100%;
    }

    #growswithcontent {
        width: 100%;
        min-height: 80px;
        display: flex;
        flex-wrap: wrap;

        .Thumbnails-container {
            width: 70px;
            height: 70px;
            display: flex;
            max-width : 70px;
            max-height: 70px;
        
            #img-container {
                z-index : 0;
                .Thumbnail {
                    width: 100%;
                    height: 100%;
                }
            }
            #button-container {
                z-index : 1;
                width: 70px;
                height: 70px;
                background-color: transparent;
                display: flex;
                position: absolute;
                justify-content: flex-end;
                #close {
                    width: 20px;
                    height: 20px;
                    border: none;
                    border-radius: 10px;
                    font-size: 10px;
                    padding: 0;
                    margin: 0;
                    :hover {
                        cursor: pointer;
                    }
                }
            }
        }

    }
`
const tokenSelector = (state) => {
    return state.token;
}

const PublishContainer = ({label,value}) => {
    const[user,setUser] = useState('mijail.febres@gmail.com')
    const[pass,setPass] = useState('algunpassword')
    const[contentPost,setContent] = useState('')
    const [pictures, uploadPictures] = useState([]);

    const dispatch = useDispatch();

    const token = useSelector(tokenSelector);

    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // get the token form localStorage
        if (token) {
            dispatch(updateToken(token)) // updating token with hooks
        }
    }, []);


    const hiddenFileInput = React.useRef(null);

    const handleUploadPhoto = () => {
        hiddenFileInput.current.click(); // Hijacks the click from the input element
    }

    const handleInputChange = event => {  // Handles the selected pictures
        const fileArray = Array.from(event.target.files) // convert to array
        uploadPictures(pictures.concat([...fileArray])); // modifying pictures
    }

    const handleEliminatePicture = (ind) => { // Handels the elimination of a picture
        const pictureArray = pictures.filter((picture,index) => index !== ind ? picture : null);
        uploadPictures([...pictureArray]);
    }

    const handlePublishing = () => { // This passes photos, and a main comment to the publisher form
        login();
        publish();
    }

    const handleText = (event) => {
        setContent(event.target.value);
    }

    const login = async () => {
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
        dispatch(updateToken(data.access)) // updating token with hooks

    }

    const publish = async () => {
        const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';

        const method = 'POST'; // method

        const headers = new Headers({  // headers
            'Authorization': `Bearer ${token}`,
        });

        const formData = new FormData();

        pictures.forEach(image => { // for pictures
            formData.append('images',image)
        })
        formData.append('content', contentPost) // the content

        const body = formData;

        const config = { // configuration
            method : method,
            headers: headers,
            body : body,
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user

        dispatch(getUserInfo(data)) // updating token with middleware

    }
    return (
        <PContainer>
            <div id='header'>
                <div id='profileContainer'>
                    <button className = 'uploadButtons' id='profile'></button>
                </div>
                <div id='thoughts'>
                    <label htmlFor="textArea" id="ruleslabel"></label>
                    <textarea id='textArea' rows='3' placeholder='Write something ...' onChange={handleText}></textarea>
                </div>


            </div>
            <div id='growswithcontent'> {/* this will show thumbnails of uploaded photos*/}
                {   pictures.length > 0 ?
                        pictures.map((picture, ind) => {
                            return (
                                <div key={ind} className='Thumbnails-container'>
                                    <div  
                                        className='Sub-thumbnails-container' 
                                        id ='img-container'
                                    >
                                        <img 
                                            className = 'Thumbnail'
                                            src={URL.createObjectURL(picture)} 
                                            alt='thumbnail'
                                        />
                                    </div>
                                    <div className = 'Sub-thumbnails-container'
                                        id = 'button-container'
                                    >
                                        <button id='close' onClick={() => handleEliminatePicture(ind)}>x</button>
                                    </div>
                                </div>
                            )
                        })
                    : null
                }

            </div>
            <div id='footer'>
                <div id='leftBottom'>
                    <button // this is the button that gets the job done!
                        className = 'uploadButtons'
                        id='uploadPicture'
                        onClick = {handleUploadPhoto}
                    >
                    </button>
                    <input 
                        type='file'
                        style = {{display : 'none'}} // we don't wanto to show this, it's appearance is ugly!!
                        ref = {hiddenFileInput}  // With this, it's event Onclick is transmitted to the button above ;)
                        onChange = {handleInputChange} // this handles the photo(s)
                        multiple // if multiple files are to be selected
                        accept = {'.png,.jpeg,.jpg,.bmp'} // acceptable formats
                    />
                    <button className = 'uploadButtons' id='uploadLink'></button>
                </div>
                <div id ='rightBottom'>
                    <button className = 'uploadButtons' id='publish' onClick={handlePublishing}></button>
                </div>
            </div>
        </PContainer>
    )
}

export default PublishContainer;