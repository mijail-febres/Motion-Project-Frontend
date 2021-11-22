import styled from "styled-components";

export const SignUpConfirmStyles = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;

    & h3 {
        margin-bottom: 3%;
        font-size: 30px;
        font-weight: bold;
    }

    & p {
        color: gray;
    }
`
export const ContinueButton = styled.button`
    transition: 0.5s;
    width: 25%;
    height: 50px;
    border-radius: 32px;
    border: none;
    background-image: linear-gradient(90deg, #7d27b68a 0%, #385fd48a 51%, #124cf88a 100%);
    background-size: 200% auto;
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    text-align: center;
    margin: 5% 0;

    &:hover {
        cursor: pointer;
        background-position: right center;
    }
`
