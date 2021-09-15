import styled from "styled-components";
import checkIcon from '../../Assets/svgs/check-mark.svg';
import cancelIcon from '../../Assets/svgs/cancel-mark.svg';
import clockIcon from '../../Assets/svgs/clock.svg';

const width = '300px';
const height = '400px';

const NotificationsContainer = styled.div `
    * {
        border: none;
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: content-box;
    }

    width : ${width};
    height: ${height};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .MainContainers {
        width: 100%;
        height: 50%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #mainreceived {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        border: 1px solid green;
    }
    .Received {
        height: 50px;
        width: 100%;
        display: flex;
        border: 1px solid blue;
        justify-content: center;
        align-items: center;
        .AvatarR {
            width: 20%;
            height: 100%;
            display: flex;
            border: 1px solid blue;
        }
        .NamesR {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .Spans {
                width: 100%;
            }
        }
        .ButtonsR {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            border: 1px solid blue;
            .ButtonR {
                width: 30px;
                height: 30px;
                border-radius: 15px;
                background-repeat: no-repeat;
                background-position-x: center;
                background-position-y: center;
                background-size: 50%;
            }
        }
    }
`
    

const NotificationsForm = () => {

    // const received =[];
    //     const sent = [];
    const received =[
        {
            firstName : 'Leticia',
            lastName  : 'Suárez',
            city      : 'Roma',
            country   : 'Italy',
        },
        {
            firstName : 'Thomas',
            lastName  : 'Castro',
            city      : 'Barcelona',
            country   : 'Spain',
        }
    ]
    const sent =[
        {
            firstName : 'Max',
            lastName  : 'Martinez',
            city      : 'Lyon',
            country   : 'France',
        },
        {
            firstName : 'Frank',
            lastName  : 'Baker',
            city      : 'Los Angeles',
            country   : 'USA',
        }
    ]

    const handleOk = () => {

    }

    const handleCancel = () => {

    }

    const handleWaiting = () => {

    }

    return (
        <NotificationsContainer>
            <div className='MainContainers' id='mainreceived'>
                {received.length > 0 ? <span>Received requests</span> : null}
                    {received.length > 0 ?
                        received.map((elem,ind) => {
                            return (
                                <div key={ind} className='Received'>
                                    <div className='AvatarR'>
                                        <button className='AvatarNot'></button>
                                    </div>
                                    <div className='NamesR'>
                                        <span className='Spans'>{`${elem.firstName} ${elem.lastName}`}</span>
                                        <span className='Spans'>{`${elem.city}, ${elem.country}`}</span>
                                    </div>
                                    <div className='ButtonsR'>
                                        <button className='ButtonR' onClick={() => handleOk(ind)} style={{backgroundImage : `url(${checkIcon})`}}></button>
                                        <button className='ButtonR' onClick={() => handleCancel(ind)} style={{backgroundImage : `url(${cancelIcon})`}}></button>
                                    </div>
                                </div>
                            )
                        })
                    :
                        <span>You have no notifications at this moment </span>
                    }
            </div>
            <div className='MainContainers' id='mainsent'>
                {sent.length > 0 ? <span>Sent requests</span> : null}
                    {sent.length > 0 ?
                        sent.map((elem,ind) => {
                            return (
                                <div key={ind} className='Received'>
                                    <div className='AvatarR'>
                                        <button className='AvatarNot'></button>
                                    </div>
                                    <div className='NamesR'>
                                        <span className='Spans'>{`${elem.firstName} ${elem.lastName}`}</span>
                                        <span className='Spans'>{`${elem.city}, ${elem.country}`}</span>
                                    </div>
                                    <div className='ButtonsR'>
                                        <button className='ButtonR' onClick={() => handleWaiting(ind)} style={{backgroundImage : `url(${clockIcon})`}}></button>
                                    </div>
                                </div>
                            )
                        })
                    :
                        <span>You have no requests at this moment </span>
                    }
            </div>
        </NotificationsContainer>
    );
}

export default NotificationsForm