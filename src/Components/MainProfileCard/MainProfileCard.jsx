import profileIcon from '../../Assets/images/users/jennifer.png' // this photo should come from API
const { default: styled } = require("styled-components");

const width = '1152px';
const height = '360px';

const MainProfileCardContainer = styled.div `
    * {
        border: none;
        margin: 0;
        padding: 0%;
        box-sizing: content-box;
    }

    height: ${height};
    width : ${width};
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 65% 35%;
    grid-template-areas: 'profile about thingILike'
                         'profile statistics statistics';
    box-sizing: content-box;
    
    #profile {
        width: 100%;
        height: 100%;
        grid-area: profile;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        #profileIcon {
            width: 90px;
            height: 90px;
            background-color: white;
            background-repeat: no-repeat;
            background-position-x: center;
            background-position-y: center;
            background-size: 100%;
        }

        .ProfileButtons{
            width: 50%;
            height: 35%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #followButtons {
            justify-content: space-between;
        }

        .Buttons { /* here the buttons should be formatted*/
            width: 100%;
            height: 35%;
        }
        
    } /* end profile */

    #about {
        width: 100%;
        height: 100%;
        grid-area: about;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #aboutCentered {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            #About {
                width: 100%;
                height: 20%;
            }

            #textArea {
                width: 100%;
                height:  80%;
                resize: none;
            }
        }
    } /* end about */ 

    #thingsILike {
        width: 100%;
        height: 100%;
        grid-area: thingILike;

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
    }
    #statistics {
        width: 100%;
        height: 100%;
        grid-area: statistics;
        display: grid;
        grid-template-columns: repeat(5,20%);
        .Div-statistics {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`


const MainProfileCard = () => {
    let ownProfile =true; // this means that the profile will show its own account (you are not supposed to add/follow yourself)
    const keyWords = ['MMA', 'travelling', 'Cooking', 'Guitar', 'Music'] // these tags should come from API
    const profilePragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
    const statistics = ['Posts','Likes','Friends','Followers','Following']; // from api
    const statisticsNumbers =[34, 256, 98,  129, 154]; // from api

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
                <button id='profileIcon' style={{backgroundImage : `url(${profileIcon})`}}></button>
                <span id='name'>Jeniffer</span>
                <span id='location'>Zürich Switzerland</span>
                {ownProfile ? // When it is your own account
                    <div class='ProfileButtons' id='editButton'>
                        <button onClick={handleEditProfile} className = 'Buttons' id='editProfile'>EDIT PROFILE</button>
                    </div>
                : // when it's someone else's account
                    <div class='ProfileButtons' id='followButtons'>
                        <button onClick={handleFollow} className = 'Buttons' id='follow'>FOLLOW</button>
                        <button onClick={handleAddFriend} className = 'Buttons' id='addFriend'>ADD FRIEND</button>
                    </div>
                }
            </div>
            <div id='about'>
                <div id = 'aboutCentered'>
                    <span id='About'>About</span>
                    <textarea id='textArea' readOnly>{profilePragraph}</textarea>
                </div>
            </div>
            <div id='thingsILike'>
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
            <div id='statistics'>
                {
                    statistics.map((item,ind) => {
                        return (
                            <div key='ind' className='Div-statistics' onClick={() => handleOnClickDivs(ind)}>
                                <span>{statisticsNumbers[ind]}</span>
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
                
            </div>
        </MainProfileCardContainer>
    );
}

export default MainProfileCard