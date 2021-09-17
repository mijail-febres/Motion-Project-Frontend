import React from "react";
import styled from "styled-components";
import signUpButtonStyle from "./questionTopStyle";
import { useHistory } from "react-router-dom";

const QContainer = styled.div `
    width: 25%;
    height: 5%;
    border:1px dotted black;
    display: flex;
    justify-content:space-between;
`



const QuestionContainer = ({label,value}) => {
        const history = useHistory();
        const handleClick = () => {
            history.push('/signupform')
        }

    return (
        <QContainer>
            <p>Don't have an account?</p>
            <label>{label}</label>
            <signUpButton onClick = { handleClick }>SIGN UP</signUpButton>
        </QContainer>
    )
}

            
export default QuestionContainer;