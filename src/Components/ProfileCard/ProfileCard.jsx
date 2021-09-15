import styled from 'styled-components';
import profileIcon from '../../Assets/images/users/jennifer.png' // this photo should come from API

const width = '300px';
const height = '400px';

const PostCardContainer = styled.div `
    * {
        border : 'none';
        margin : 0;
        padding: 0;
        box-sizing: content-box;
    }

    width: ${width};
    height: ${height};

    #header {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #profileIcon {
            width: 60px;
            height: 60px;
            border : none;
            border-radius: 30px;
            background-repeat: no-repeat;
            background-position-x: center;
            background-position-y: center;
            background-size: 100%;
        }
    } /* end header */

    #body {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .BodyButtons {
            width: 40%;
            height: 80%;
        }

        #body-buttons{
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #textarea{
            width: 100%;
            height: 70%;
            box-sizing: content-box;
            resize: none;
            border: none;
            text-align: center;
        }

    } /* end of body*/

    #footer {
        width: 100%;
        height: 30%;
        display: flex;
        #tags {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .tagButtons {
                width: 30%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items : center;            }
        }
    } /* end of footer */

`
const ProfileCard = () => {

    const keyWords = ['MMA', 'travelling', 'Cooking', 'Guitar', 'Music'] // these tags should come from API
    const profilePragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';

    const handleFollow = () => { 
        // To be implemented
    }

    const handleAdd = () => {
        // To be implemented
    }

    return (
        <PostCardContainer>
            <div id='header'>
                <button id='profileIcon' style={{backgroundImage : `url(${profileIcon})`}}>
                </button>
                <span id='name'>Jeniffer</span>
                <span id='location'>Zürich Switzerland</span>
            </div>

            <div id = 'body'>
                <div id='body-buttons'>
                    <button onClick={handleFollow} className='BodyButtons' id='follow'>
                        FOLLOW
                    </button>
                    <button onClick={handleAdd} className='BodyButtons' id='addFriend'>
                        ADD FRIEND
                    </button>
                </div>
                <textarea id='textarea'>
                    {profilePragraph}
                </textarea>
            </div>

            <div id = 'footer'>
                <div id='tags'>
                    {
                        keyWords.map((key,ind) => {
                            return (
                                <button key={ind} className='tagButtons'> {key} </button>
                            )
                        })
                    }
                </div>
            </div>

        </PostCardContainer>
    )
}

export default ProfileCard;