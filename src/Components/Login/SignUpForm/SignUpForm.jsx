import React from 'react';
import { useHistory } from 'react-router';
import SignUpVerifyPage from '../../../Pages/Signup/SignUpVerify/SignUpVerifyPage';

function SignUpForm() {
    const history = useHistory();
    const routeChange = () => {
        let path = "./signupverify";
        history.push(path)
    }
    return (
        <div>
            <div className='instruction' >
                <h3>Sign Up</h3>
            </div>

            <div className='inputWrapper' >
                <input type='text' placeholder='Email' ></input>
            </div>

            <div className='buttonWrapper' >
                <button onClick={routeChange}>Continue</button>
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
