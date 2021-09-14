import React, { useState } from "react";
import styled from "styled-components";
import sendButton from '../../Assets/svgs/send_button.svg';
import linkIcon from '../../Assets/svgs/link_icon.svg';
import pictureIcon from '../../Assets/svgs/upload_picture.svg';
import profileIcon from '../../Assets/images/users/jennifer.png'


const PContainer = styled.div `
    width: 30%;
    border:1px dotted black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #header {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid green;
    }

    #footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #profile {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-image: url(${profileIcon});
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

    #growswithcontent {
        width: 100%;
        min-height: 80px;
        display: flex;
        flex-wrap: wrap;

        .Thumbnails-container {
            width: 70px;
            height: 70px;
            max-width : 70px;
            max-height: 70px;
        
            .Thumbnail {
                width: 100%;
                height: 100%;
            }
        }

    }
`
const PublishContainer = ({label,value}) => {

    const [pictures, uploadPictures] = useState([]);

    const hiddenFileInput = React.useRef(null);

    const handleUploadPhoto = () => {
        hiddenFileInput.current.click(); // Hijacks the click from the input element
    }

    const handleInputChange = event => {  // Handles the selected pictures
        const fileArray = Array.from(event.target.files) // convert to array
        uploadPictures(pictures.concat([...fileArray])); // modifying pictures
    }

    return (
        <PContainer>
            <div id='header'>
                <button className = 'uploadButtons' id='profile'></button>
                <div id='thoughts'>
                    <p> Something</p>
                </div>
            </div>
            <div id='growswithcontent'> {/* this will show thumbnails of uploaded photos*/}
                {   pictures.length > 0 ?
                        pictures.map((picture, ind) => {
                            return (
                                <div key={ind} 
                                     className='Thumbnails-container' 
                                >
                                    <img 
                                        className = 'Thumbnail'
                                        src={URL.createObjectURL(picture)} 
                                        alt='thumbnail'
                                    />
                                </div>
                            )
                        })
                    : null
                }

            </div>
            <div id='footer'>
                <div id='leftBottom'>
                    <button 
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
                    <button className = 'uploadButtons' id='publish'></button>
                </div>
            </div>
        </PContainer>
    )
}

export default PublishContainer;