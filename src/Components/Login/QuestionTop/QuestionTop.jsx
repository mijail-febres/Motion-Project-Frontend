import React from "react";
import { useHistory } from "react-router-dom";
import { QContainer } from "./QuestionTopStyle";

const QuestionContainer = (props) => {
    const history = useHistory();
    const handleClick = () => {
        if (props.labelButton==='SIGN UP') {
            history.push('/signupform')
        } else {
            history.push('/login')
        }
    }

    return (
        <QContainer>
            <p>{props.labelQuestion}</p>
            <button id='signUpButton' onClick = { handleClick }>{props.labelButton}</button> 
        </QContainer>
    )
}

            
export default QuestionContainer;