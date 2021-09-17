import styled from "styled-components";

const BackgroundContainer = styled.div `
    * {
        border: none;
        box-sizing: content-box;
        /* margin: 20px 20px; */

    }

    left: 0;
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0.2);
    margin: 0;
    padding : 0 -20px;

    & > * {
        margin: 20px 20px;
    }

    #rest {
        width: 100%;
        height: 100%;
    }
`
export default BackgroundContainer;