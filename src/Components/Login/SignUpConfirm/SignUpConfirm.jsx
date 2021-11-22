import React from 'react'
import checkMark from '../../../Assets/svgs/check-mark-circle-thin.svg'
import { useHistory } from 'react-router';
import {SignUpConfirmStyles, ContinueButton} from './SignUpConfirmStyles';

function SignUpConfirm() {
    const history = useHistory();
    const clickHandler = () => {
        history.push('/signupverify')
    }
    return (
        <SignUpConfirmStyles>
            <h3>Congratulations!</h3>

            <img src={checkMark} alt="Check Mark Icon" height='81px' width='81px' />
            <p>We've sent a confirmation code to your email</p>
            <p>TEST@CHANGEME.COM</p>

            <ContinueButton onClick={clickHandler}>Continue</ContinueButton>

        </SignUpConfirmStyles>
    )
}

export default SignUpConfirm
