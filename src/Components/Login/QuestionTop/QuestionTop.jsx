import React from "react";
import styled from "styled-components";
import signUpButtonStyle from "./questionTopStyle";
import { useHistory } from "react-router-dom";

const QContainer = styled.div `
    display: flex;
    // border: $testBorder;
    /* align-items: center; */
    font-size: calc(#{$fontS} + 4px);
    align-self: flex-end;
    justify-self: flex-start;
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