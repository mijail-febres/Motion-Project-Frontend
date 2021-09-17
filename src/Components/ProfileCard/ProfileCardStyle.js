import styled from 'styled-components';

const width = '300px';
const height = '400px';

const PostCardContainer = styled.div `
    * {
        border : 'none';
        padding: 0;
        box-sizing: content-box;
    }

    width: ${width};
    height: ${height};
    background-color: white;
    margin : 20px 20px;

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
            background-color: white;
            border: 1px solid rgba(0,0,0,0.3);
            margin: 10px;
            border-radius: 15px;
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
                border-radius: 20px;
                margin: 0px 10px;
                justify-content: center;
                align-items : center;            }
        }
    } /* end of footer */

`
export default PostCardContainer;