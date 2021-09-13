import React from 'react'
import checkMark from '../../Assets/svgs/check-mark-circle-thin.svg'

function SignUpConfirm() {
    return (
        <div>
            <div className='instruction' >
                <h3>Congratulations!</h3>
            </div>

            <div className='inputWrapper' >
                <img src={checkMark} alt="Check Mark Icon" height='100' />
                <p>We've sent a confirmation code to your email</p>
                <p>TEST@CHANGEME.COM</p>
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

export default SignUpConfirm
