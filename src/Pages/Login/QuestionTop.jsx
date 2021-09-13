import React from "react";
import styled from "styled-components";

const QContainer = styled.div `
    width: 25%;
    height: 10%;
    border:1px dotted black;
    display: flex;
    justify-content:space-between;
`
const QuestionContainer = ({label,value}) => {

    const actionOnClick = () => {

    }

    return (
        <QContainer>
            <label>{label}</label>
            <button onClick={actionOnClick}>{value}</button>
        </QContainer>
    )
}

export default QuestionContainer;