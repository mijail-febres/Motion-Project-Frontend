import React from 'react'
import styled from 'styled-components'
import Leftside from '../../../Components/Login/Leftside/Leftside'
import Rightside from '../../../Components/Login/Rightside/Rightside'
import SignUpConfirm from '../../../Components/Login/SignUpConfirm/SignUpConfirm'


function SignUpConfirmPage() {
    return (
        <div>
            <BackgroundStyle>
                <Leftside />
                <Rightside>
                    <SignUpConfirm />
                </Rightside>
            </BackgroundStyle>
        </div>
    );
}

const BackgroundStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

export default SignUpConfirmPage;