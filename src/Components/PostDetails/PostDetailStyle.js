import styled from "styled-components";
import profileIcon from '../../Assets/images/users/blank-profile.png'
import menuIcon from '../../Assets/svgs/menu.svg'

const width = '800px';

export const PostDetailsBlackout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #16161690;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
`

export const PostDetailsContainer = styled.div `
    * {
        margin : 0;
        padding: 0;
        border: none;
        box-sizing: content-box;
    }
    
    position: fixed;
    display: flex;
    left: calc(50vw - (${width} / 2));
    top: 15vh;
    width: ${width};
    height: auto;
    background-color: white;
    z-index: 10;

    #panelLeft {
        width : 60%;
        /* height: 100%; */
        /* overflow: hidden; */

        & p {
            font-weight: bold;
            font-size: 30px;
            margin: 40% 40%;
        }

        #pictureLeft {
            width: 100%;
            /* height: 100%; */
        }
    }

    #panelRight {
        width : 40%;
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        #header {
            width: 100%;
            height: 20%;
            display: grid;
            position: relative;
            grid-template-columns: 20%  70% 10%;
            grid-template-rows: 25% 25% 50%;
            grid-template-areas: 'profile name menu'
                                'profile time menu'
                                'comment comment comment';

            #profileContainer {
                grid-area: profile;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                #profile {
                    background-image: url(${profileIcon});
                    border-radius: 50%;
                }
            }

            #nameContainer {
                width: 100%;
                height: 100%;
                display: flex;
                grid-area: name;
                #name {
                    width: 100%;
                    height: 100%;
                }
            }
            #timeContainer {
                width: 100%;
                height: 100%;
                grid-area: time;
                display: flex;
                #time {
                    color: gray;
                    width: 100%;
                    height: 100%;
                }
            }
            #menuContainer {
                grid-area: menu;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                #menu {
                    width:  25px;
                    height: 25px;
                    background-image: url(${menuIcon});
                }

            }
            #commentContainer {
                grid-area: comment;
                width: 100%;
                height: 100%;
                display: flex;
                #textArea {
                    margin-left: 2%;
                    margin-top: 2%;
                    color: black;
                    width: 98%;
                    height: 98%;
                    resize: none;
                    font-size: 15px;
                }
            }
            #popup-menu {
                width: 40%;
                height: 80%;
                position: absolute;
                display: flex;
                flex-direction: column;
                left : 105%;

                .ButtonMenu {
                    height: 50%;
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    :hover{
                        cursor: pointer;
                    }
                    .MenuImg {
                        height: 25px;
                        width : 25px;
                    }
                }
                #edit {
                    border-bottom: 1px solid gray;
                }

            }
        }

        #body {
            width: 100%;
            height: 60%;
        }

        #footer {
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            #profileLike {
                width: 100%;
                height: 40%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                #avatarLike {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    position: relative;
                    .OtherUsers{
                        width: 35px;
                        height: 35px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        .OtherAvatar{
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            background-color: white;
                            background-repeat: no-repeat;
                            background-position-x: center;
                            background-position-y: center;
                            background-size: contain;
                            :hover{
                                cursor: pointer;
                            }
                        }
                    }
                }
                #countLike {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
            }

            #buttonsLikeShare {
                width: 100%;
                height: 60%;
                display: flex;
                justify-content: flex-start;
                border-top: 1px solid gray;

                .ButtonBottom {
                    height: 100%;
                    width: 20%;
                    background-color: white;
                    display: flex;
                    justify-content:space-between;
                    align-items: center;
                    padding: 0px 20px;
                    :hover{
                        cursor: pointer;
                    }
                }
            }
        }

    }
    .ProfileButtons {
        width:  40px;
        height: 40px;
        border: none;
        border-radius: 15px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: contain;
        margin: 0px 5px;
        background-color: white;
        :hover {
            cursor: pointer;
        }
    }
`