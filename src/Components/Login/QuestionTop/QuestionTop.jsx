import React from "react";
import styled from "styled-components";

const QContainer = styled.div `
    width: 25%;
    height: 5%;
    border:1px dotted black;
    display: flex;
    justify-content:space-between;
`
const QuestionContainer = ({label,value}) => {
    return (
        <QContainer>
            <label>{label}</label>
            <button>{value}</button>
        </QContainer>
    )
}

export default QuestionContainer;