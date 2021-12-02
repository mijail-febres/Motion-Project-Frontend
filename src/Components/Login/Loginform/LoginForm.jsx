import React from 'react';
import { useState } from 'react';
import {SignInContainer, SignInButton} from './LoginFormStyle'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { userLogin } from '../../../Store/Actions/loginAction';
import { useHistory } from 'react-router';


function LoginForm() {
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault()
        userLogin(userInput, passwordInput);
        setTimeout(() => {
            history.push('/')
        },1000)
    }

    return (
        <SignInContainer >
            <h3>Sign In</h3>
            <input type='text' placeholder='Username' onChange={(e) => setUserInput(e.target.value)} value={userInput} ></input>
            <input type="password" placeholder='Password' onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} ></input>
            <img src="../../" alt="" />

            <SignInButton className='buttonSignIn' onClick={submitHandler} >Sign In</SignInButton>
        </SignInContainer>
    );
}

export default LoginForm;