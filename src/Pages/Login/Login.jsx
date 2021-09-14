import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../Components/Login/Loginform/LoginForm'
import QuestionContainer from '../../Components/Login/QuestionTop/QuestionTop'
import Leftside from '../../Components/Login/Leftside/Leftside'
// import SignUpConfirm from './SignUpConfirm'
// import SignUpForm from './SignUpForm'
// import SignUpVerifiy from './SignUpVerifiy'
import Rightside from '../../Components/Login/Rightside/Rightside'


function Login() {
    return (
        <div>
                <BackgroundStyle>
                    <Leftside />
                    <Rightside>
                        <QuestionContainer />
                        <LoginForm />
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

export default Login;