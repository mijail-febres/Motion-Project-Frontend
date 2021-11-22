import React from 'react'
import styled from 'styled-components'
import Leftside from '../../../Components/Login/Leftside/Leftside'
import Rightside from '../../../Components/Login/Rightside/Rightside'
import SignUpForm from '../../../Components/Login/SignUpForm/SignUpForm'
import QuestionContainer from '../../../Components/Login/QuestionTop/QuestionTop'

function SignUpFormPage() {
    return (
        <div>
            <BackgroundStyle>
                <Leftside />
                <Rightside>
                    <div id='qContainer'>
                        <QuestionContainer labelQuestion="Already have an account?" labelButton="SIGN IN"/>
                    </div>
                    <div id='formContainer'>
                        <SignUpForm />
                    </div>
                </Rightside>
            </BackgroundStyle>
        </div>
    );
}

const BackgroundStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

export default SignUpFormPage;