import React, { useState } from "react";
import validationAction from "../../../Store/Actions/validation";

function SignUpVerify() {

    const [email, setEmail] = useState('');
    const [code, setValidtionCode] = useState('');
    const [username, setUserName] = useState('');
    const [firstName, setUserFirstName] = useState('');
    const [lastName, setUserLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    // const [registerStep, setRegisterStep] = useState(0);

    const submitVerify = async (e) => {
        e.preventDefault()
        validationAction(email, code, username, firstName, lastName, password, passwordRepeat)
    }

    return (
        <div>
            <div className='instruction' >
                <h3>Verification</h3>
            </div>

            <div className='inputWrapper' >
                <input type="text" placeholder='Verification code' onChange={(e) => setValidtionCode(e.target.value)} value={code} />
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="text" placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={username} />
                <input type="text" placeholder='First Name' onChange={(e) => setUserFirstName(e.target.value)} value={firstName} />
                <input type="text" placeholder='Last Name' onChange={(e) => setUserLastName(e.target.value)} value={lastName} />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="password" placeholder='Confirm Password' onChange={(e) => setPasswordRepeat(e.target.value)} value={passwordRepeat} />
            </div>

            <div className='buttonWrapper' >
                <button onClick={submitVerify}>Continue</button>
            </div>


            {/* this will become a progress bar */}
            <div>
                <div></div>
            </div>
            {/* this will become a progress bar */}
        </div>
    )
}

export default SignUpVerify
