import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
// import SignUpVerifyPage from '../../../Pages/Signup/SignUpVerify/SignUpVerifyPage';
import registrationAction from '../../../Store/Actions/registrationAction';
import { SignupFormStyles } from './SignUpFormStyles';
import signUpButtonStyle from '../QuestionTop/questionTopStyle';

function SignUpForm() {
    const history = useHistory()
    const [email, setEmail] = useState('');

    const submitSignUp = async (e) => {
        e.preventDefault()
        registrationAction(email)
        history.push('./signupconfirm')
    }
    
    return (
        <SignupFormStyles>
        <div>
            <div className='instruction' >
                <h3>Sign Up</h3>
            </div>

            <div className='inputWrapper' >
                <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>

            <div className='buttonWrapper' >
                <signUpButtonStyle onClick={submitSignUp}>Continue</signUpButtonStyle>
                {/* <button onClick={handleClick}>Continue</button> */}
            </div>


            {/* this will become a progress bar */}
            <div>
                <div></div>
            </div>
            {/* this will become a progress bar */}
        </div>
        </SignupFormStyles>
    )
}

export default SignUpForm
