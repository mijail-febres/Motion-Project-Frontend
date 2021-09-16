import React from 'react'

function SignUpVerify() {
    return (
        <div>
            <div className='instruction' >
                <h3>Verification</h3>
            </div>

            <div className='inputWrapper' >
                <input type="text" placeholder='Verification code' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
            </div>

            <div className='buttonWrapper' >
                <button>Continue</button>
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
