// Reusable component for left side of Login and Signup

import React from 'react';
// import { Title } from './LeftsideStyle';
import { PageLeftContainer } from './LeftsideStyle';
import { PageContainerTop } from './LeftsideStyle';
import { PageContainerMiddle } from './LeftsideStyle';
import { IconMotion } from './LeftsideStyle';
import { Para1 } from './LeftsideStyle';
import { Para2 } from './LeftsideStyle';
import { Para3 } from './LeftsideStyle';
import { IconBorder1 } from './LeftsideStyle';
import MotionLogo from '../../../Assets/images/logo_white.png';
import AppStoreLogo from '../../../Assets/svgs/apple.svg';
import GoogleStoreLogo from '../../../Assets/svgs/google.svg';
import CopyrightContainer from '../Copyright/Copyright';

const Leftside = () => {
    return (
        <div>
            {/* <div> */}
                {/* <Title>Landing Left Center</Title> */}

                <PageLeftContainer>
                    <PageContainerTop>
                        <IconMotion>
                        <img src={ MotionLogo } alt="Motionlogo" />
                        </IconMotion>
                        <Para1>Motion</Para1>
                        <Para2>Connect with friends and the world</Para2>
                            <Para3>around you with Motion</Para3>
                    </PageContainerTop>
                    
                    <PageContainerMiddle>
                        <IconBorder1>
                            <img src={AppStoreLogo} alt="Appstorelogo" />
                        </IconBorder1>

                        <IconBorder1>
                            <img src={ GoogleStoreLogo } alt="Googleappstorelogo" />
                        </IconBorder1>
                    </PageContainerMiddle>
                    <CopyrightContainer />
                </PageLeftContainer>
            </div>
        // </div>
    )
}

export default Leftside