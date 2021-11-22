// Reusable simple component for right side.

import styled from 'styled-components';

const Rightside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    height: 100%;
    #qContainer {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: flex-end;
    }
    #formContainer {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
    }
`

export default Rightside;