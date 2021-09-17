import sendButton from '../../Assets/svgs/send_button.svg';
import linkIcon from '../../Assets/svgs/link_icon.svg';
import pictureIcon from '../../Assets/svgs/upload_picture.svg';
import profileIcon from '../../Assets/images/users/blank-profile.png'
import styled from "styled-components";

const width = '40%'

export const PublishBlackout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #16161690;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`

export const PContainer = styled.div `
    * {
        border: none;
        padding: 0;
        margin : 0;
        box-sizing: content-box;
    }
    width: ${width};
    background-color: white;
    border:1px solid #e2e2e2;
    display: flex;
    position: fixed;
    left: calc(50vw - (${width} / 2));
    top: 20vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 11;
    border-radius: 5px;
    box-shadow: 0 0 20px black;
    & > * {
        /* border: red 2px solid; */
    }

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
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-image: url(${profileIcon});
            }
        }
        #thoughts {
            width: 80%;
            #textArea {
                margin-top: 2%;
                width: 100%;
                height: 100%;
                max-height: 100%;
                resize: none;
                outline: none;

                &:active{
                    background-color: lightgray;
                }
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
        background-color: lightgray;
        &:hover {
            background-color: #bf4bcf;
        }
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