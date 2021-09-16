import React, { useState, useRef, useEffect, useSelector, useDispatch } from "react";
import {PContainer, PublishBlackout } from './PublishSomethingStyle';

// const tokenSelector = (state) => {
//     return state.token;
// }

const PublishContainer = (props) => {
    const[user,setUser] = useState('mijail.febres@gmail.com')
    const[pass,setPass] = useState('algunpassword')
    const[token,setToken] = useState(null)
    const[contentPost,setContent] = useState('')
    const [pictures, uploadPictures] = useState([]);

    // const dispatch = useDispatch();

    // const token = useSelector(tokenSelector);

    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // get the token form localStorage
        if (token) {
            // dispatch(updateToken(token)) // updating token with hooks
            setToken(token);
        }
    }, []);


    const hiddenFileInput = useRef(null);

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
            'email': 'patrickmzimmermann@gmail.com',
            'password': 'test123',
        }

        const config = { // configuration
            method : method,
            headers: headers,
            body : JSON.stringify(body)
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user
        localStorage.setItem('auth-token', data.access); // store token
        // dispatch(updateToken(data.access)) // updating token with hooks
        setToken(data.acces)

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

        // dispatch(getUserInfo(data)) // updating token with middleware

    }
    return (
        <div>
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
        <PublishBlackout onClick={props.showNewClick} />
        </div>
    )
}

export default PublishContainer;
