import React from 'react'

function SignUpForm() {
    return (
        <div>
            <div className='instruction' >
                <h3>Sign Up</h3>
            </div>

            <div className='inputWrapper' >
                <input type='text' placeholder='Email' ></input>
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

export default SignUpForm
