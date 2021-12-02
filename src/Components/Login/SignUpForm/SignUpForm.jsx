import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';

// import SignUpVerifyPage from '../../../Pages/Signup/SignUpVerify/SignUpVerifyPage';
import registrationAction from '../../../Store/Actions/registrationAction';
import { SignupFormStyles, SignUpButton } from './SignUpFormStyles';
import sendMailAction from '../../../Store/Actions/sendMailAction';

function SignUpForm() {
    const history = useHistory()
    const [email, setEmail] = useState('');
 
    const submitSignUp = (e) => {
        e.preventDefault()
        console.log('bef')
        sendMailAction(email)
        registrationAction(email)
        history.push('./signupconfirm')
    }
    
    return (
        <SignupFormStyles>
            <h3>Sign Up</h3>

            <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>

            <SignUpButton onClick={submitSignUp}>Continue</SignUpButton>
        </SignupFormStyles>
    )
}

export default SignUpForm
