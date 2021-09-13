import React from 'react'
import SignUpConfirm from './SignUpConfirm'
import SignUpForm from './SignUpForm'
import SignUpVerifiy from './SignUpVerifiy'

function Login() {
    return (
        <div>
            {/* these 3 will be switched between when signing up */}
            <SignUpForm />
            <SignUpConfirm />
            <SignUpVerifiy />
            {/* these 3 will be switched between when signing up */}
        </div>
    )
}

export default Login