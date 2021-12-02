import React , {useEffect} from 'react'
import checkMark from '../../../Assets/svgs/check-mark-circle-thin.svg'
import { useHistory } from 'react-router';
import {SignUpConfirmStyles, ContinueButton} from './SignUpConfirmStyles';
import {useSelector} from 'react-redux';
import store from '../../../Store/Store';

function SignUpConfirm() {
    // const tempMail = useSelector((state) => state.getState());
    const history = useHistory();
    const clickHandler = () => {
        history.push('/signupverify')
    }

    useEffect(() => {
        console.log(store.getState().sendMailReducer)
    }, [])
    return (
        <SignUpConfirmStyles>
            <h3>Congratulations!</h3>

            <img src={checkMark} alt="Check Mark Icon" height='81px' width='81px' />
            <p>We've sent a confirmation code to your email</p>
            {/* <p>{tempMail}</p> */}

            <ContinueButton onClick={clickHandler}>Continue</ContinueButton>

        </SignUpConfirmStyles>
    )
}

export default SignUpConfirm
