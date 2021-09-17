import styled from 'styled-components'

export const PostFooterWrapper = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

export const FooterLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:first-child {
        margin-right: 20px;
    }
    & img {
        fill: red;
        color: red;
        opacity: 40%;
        filter: brightness(0);
        margin-right: 10px;
    }
    
    &:hover {
        & img {
            opacity: 80%;
            filter: brightness(100);
        }
    }
    
`

export const LikeCounter = styled.p`
    color: gray;
    text-align: end;
    flex-grow: 1;
`

export const FooterButton = styled.button`
    border: transparent;
    background-color: transparent;
    cursor: pointer;

`

