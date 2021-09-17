const width = '70%';
const height = '200px';

const { default: styled } = require("styled-components");
const MainProfileCardContainer = styled.div `
    * {
        border: none;
        margin: 0;
        padding: 0%;
        box-sizing: content-box;
    }

    height: ${height};
    width : ${width};
    margin : 40px 0px 20px 0px;
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
        border: 1px solid rgba(0,0,0,0.3);

        #profileIcon {
            width: 80px;
            height: 80px;
            border-radius: 40px;
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
            background-color: white;
            border: 1px solid rgba(0,0,0,0.3);
            margin: 10px;
            border-radius: 15px;
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
        border-left: 1px solid rgba(0,0,0,0.3);
        border-top: 1px solid rgba(0,0,0,0.3);
        border-right: 1px solid rgba(0,0,0,0.3);


        #aboutCentered {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            #About {
                width: 100%;
                height: 30%;
            }

            #textArea {
                width: 100%;
                height:  70%;
                resize: none;
            }
        }
        #div-email{
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            #emailTag{
                width: 100%;
                height: 30%;
            }
            #email{
                width: 100%;
                height: 70%;
            }
        }
    } /* end about */ 

    #thingsILike {
        width: 100%;
        height: 100%;
        grid-area: thingILike;
        border-top: 1px solid rgba(0,0,0,0.3);
        border-right: 1px solid rgba(0,0,0,0.3);
        #tags {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .tagButtons {
                width: 30%;
                height: 25%;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items : center;
                margin: 0px 10px;
            }
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
            border: 1px solid rgba(0,0,0,0.3);
            box-sizing: content-box;
        }
    }
`
export default MainProfileCardContainer;