import styled from "styled-components"

export const QContainer = styled.div `
    width: 35%;
    height: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;

    #signUpButton {
        width: 30%;
        height: 30%;
        background-color: white;
        border-radius: 35px;
        border: 2px solid gray;
    }
`;

// const signUpButtonStyle = styled.button`
//     transition: 0.5s;
//     width: 25%;
//     height: 64px;
//     border-radius: 32px;
//     border: none;
//     background-image: linear-gradient(90deg, #7d27b68a 0%, #385fd48a 51%, #124cf88a 100%);
//     background-size: 200% auto;
//     text-transform: uppercase;
//     color: white;
//     font-size: 20px;
//     text-align: center;
//     margin: 5% 0;
// `