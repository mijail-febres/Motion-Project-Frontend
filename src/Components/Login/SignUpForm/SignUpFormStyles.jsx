import styled from 'styled-components'
import envelopeIcon from '../../../Assets/svgs/envelope-svgrepo-com.svg'

export const SignupFormStyles = styled.form`
     width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;


    & input {
        background-size: 30px;
        background-position-y: center;
        background-position-x: 3%;
        background-repeat: no-repeat;
        background-color: white;
        height: 50px;
        padding: 0 50px;
        border: none;
        border-bottom: solid 2px gray;
        margin-top: 2%;
        font-size: 20px;
        transition: 0.5s;
    }
    & input[type=text] {
        background-image: url(${envelopeIcon});
    }

    & input:focus {
    outline: none;
    background-color: rgb(240, 240, 240);
    }
    & h3 {
        margin-bottom: 3%;
        font-size: 30px;
        font-weight: bold;
    }

`

export const SignUpButton = styled.button`
    transition: 0.5s;
    width: 25%;
    height: 64px;
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