import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
// import SignUpVerifyPage from '../../../Pages/Signup/SignUpVerify/SignUpVerifyPage';
import registrationAction from '../../../Store/Actions/registrationAction';

function SignUpForm() {
    const history = useHistory()
    const [email, setEmail] = useState('');

    const submitSignUp = async (e) => {
        e.preventDefault()
        registrationAction(email)
        history.push('./signupconfirm')
    }
    
    return (
        <div>
            <div className='instruction' >
                <h3>Sign Up</h3>
            </div>

            <div className='inputWrapper' >
                <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>

            <div className='buttonWrapper' >
                <button onClick={submitSignUp}>Continue</button>
                {/* <button onClick={handleClick}>Continue</button> */}
            </div>


            {/* this will become a progress bar */}
            <div>
                <div></div>
            </div>
            {/* this will become a progress bar */}
        </div>
    )
}

export default SignUpForm
