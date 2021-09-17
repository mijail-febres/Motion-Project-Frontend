import PostCardContainer from './ProfileCardStyle';

const ProfileCard = (props) => {

    const handleFollow = () => { 
        // To be implemented
    }

    const handleAdd = () => {
        // To be implemented
    }

    return (
        <PostCardContainer>
            <div id='header'>
                <button id='profileIcon' style={{backgroundImage : `url(${props.user.avatar})`}}>
                </button>
                <span id='name'>{props.user.first_name? props.user.first_name : props.user.username}</span>
                <span id='location'>{props.user.location}</span>
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
                <textarea id='textarea' defaultValue={props.user.about_me} >
                    {/* {props.user.about_me} */}
                </textarea>
            </div>

            <div id = 'footer'>
                <div id='tags'>
                    {
                        props.user.things_user_likes.map((key,ind) => {
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